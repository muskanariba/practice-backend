const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Add note
router.post('/', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// Delete note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
