const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const domainRoutes = require('./routes/domain');
const offerRoutes = require('./routes/offer');
const landingPageRoutes = require('./routes/landingPage');
const connectDB = require('./config/db_connection');
const path = require('path'); // Import the path module

const app = express();
const port = 4000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(bodyParser.json());


// Database connection
connectDB();

// Routes
app.use('/api/user', userRoutes);
app.use('/api/domain', domainRoutes);
app.use('/api/offer', offerRoutes);
app.use('/api/landingpage', landingPageRoutes);


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
