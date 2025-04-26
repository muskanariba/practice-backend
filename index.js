const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors({
  origin: '*',  // Allow all origins (for development purposes)
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
const notesRoutes = require('./routes/notes');
app.use('https://practice-backend-kappa.vercel.app/api/notes', notesRoutes);

// Export the app for Vercel
module.exports = app;
