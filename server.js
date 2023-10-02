const express = require('express');
const path = require('path');  // Import the path module
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const PORT = 8000;

app.use(express.json());

// Serve static files
app.use(express.static('public'));
app.use('/processedImages', express.static(path.join(__dirname, 'processedImages')));


app.use('/images', imageRoutes);

// Send the HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'browserTest.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
