const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

console.log("Checking database content...");

db.all("SELECT * FROM leads ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
        console.error("Error querying database:", err);
        return;
    }
    console.log(`Found ${rows.length} leads in database:`);
    console.log(JSON.stringify(rows, null, 2));

    // Close cleanly
    db.close();
});
