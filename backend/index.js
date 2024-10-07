const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const domainRoutes = require('./routes/domain');
const offerRoutes = require('./routes/offer');
const landingPageRoutes = require('./routes/landingPage');
const networkRoutes = require('./routes/network');
const connectDB = require('./config/db_connection');
const path = require('path'); // Import the path module

const app = express();
const Port = 4000

const uri = 'mongodb://localhost:27017/associate_dashboard';
const corsOrigin ={
  origin:'http://localhost:3000', //or whatever port your frontend is using
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOrigin));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
try {
  mongoose.connect(uri)
  console.log('Connected to MongoDB');

} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  throw error;
}

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
app.use('/api/network', networkRoutes);


// Start server
app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
  }) 