// Import dependencies
require('dotenv').config(); // Load .env variables
const express = require('express');
const path = require('path');

const app = express();

// Load the API key from .env
const API_KEY = process.env.API_KEY;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to provide the API key
app.get('/api-key', (req, res) => {
    res.json({ apiKey: API_KEY });
});
app.use((req, res) => {
    res.status(404).send('Page not found');
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
