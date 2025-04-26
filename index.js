const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI )
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Routes
const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

app.listen(process.env.PORT, () => console.log('Server running on port 5000'));
