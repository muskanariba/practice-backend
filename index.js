const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*',   
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Routes
const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

// 🚫 app.listen hata do
module.exports = app;   // 👈 Yeh export karna hai Vercel ke liye
