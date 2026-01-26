# ZUWOS Marketing Website

## Setup & Run

1.  **Install Dependencies** (if not already done):
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will launch the website at `http://localhost:5173`.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    *Note: If you encounter Rollup errors on Windows, ensure your file paths aren't too long or try running in a terminal with Admin privileges.*

## Project Structure
- `src/components/layout`: Navbar, Footer
- `src/components/sections`: Landing page sections (Hero, Shift, StakeholderTabs, etc.)
- `src/components/ui`: Reusable UI components (Button, Card)
- `tailwind.config.js`: Dropbox-inspired design system tokens.
