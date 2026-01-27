const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Security Configurations
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { error: 'Too many requests from this IP, please try again after 15 minutes' },
    standardHeaders: true,
    legacyHeaders: false,
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // 5 attempts per IP per 15 minutes
    message: { error: 'Too many login attempts. Please try again later.' }
});

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(xss()); // Prevent XSS attacks
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent DoS
app.use('/api/', globalLimiter); // Apply rate limiting to all API routes

// Auth Middleware
const authenticateToken = (req, res, next) => {
    // ... (rest of middleware unchanged)
};

// ... (rest of database setup unchanged)

// Routes

// 1. Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// 2. Admin Login
app.post('/api/login', authLimiter, (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || 'zuwosadmin123';

    if (password === adminPassword) {
        const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
        return res.json({ token });
    }

    res.status(401).json({ error: 'Incorrect password' });
});

// 2. Submit Lead (Request Access)
app.post('/api/leads', (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    const stmt = db.prepare('INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)');
    stmt.run(name, email, phone || '', function (err) {
        if (err) {
            console.error('Error inserting lead:', err);
            return res.status(500).json({ error: 'Failed to save form data' });
        }
        res.status(201).json({ id: this.lastID, message: 'Request received successfully' });
    });
    stmt.finalize();
});

// 3. Get All Leads (Admin)
app.get('/api/leads', authenticateToken, (req, res) => {
    db.all("SELECT * FROM leads ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// 4. Submit Job Application
app.post('/api/applications', (req, res) => {
    const { role, department, name, email, linkedin } = req.body;

    if (!role || !name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const stmt = db.prepare('INSERT INTO applications (role, department, name, email, linkedin) VALUES (?, ?, ?, ?, ?)');
    stmt.run(role, department, name, email, linkedin || '', function (err) {
        if (err) {
            console.error('Error inserting application:', err);
            return res.status(500).json({ error: 'Failed to save application' });
        }
        res.status(201).json({ id: this.lastID, message: 'Application received' });
    });
    stmt.finalize();
});

// 5. Get All Applications (Admin)
app.get('/api/applications', authenticateToken, (req, res) => {
    db.all("SELECT * FROM applications ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
