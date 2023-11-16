const express = require('express');
const { createNewNote, deleteNote } = require('../notes');
const router = express.Router();
const notes = require('../db/db.json');

//middleware for parsing incoming JSON data - Edward Kim helped here
router.use(express.json());

//GET /api/notes - Edward Kim helped here
router.get('/', (request, response) => {
  response.json(notes);
});

// Get all notes
router.get('/notes', (request, response) => {
  response.json(notes);
});

// Create a new note
router.post('/notes', async (request, response) => {
  try {
    const newNote = { ...request.body, id: notes.length.toString() };
    const createdNote = createNewNote(newNote, notes);
    await response.json(createdNote);
  } catch (error) {
    await response.status(500).json({ error: 'Sorry, unable to create a note.' });
  }
});

// Delete a note by ID
router.delete('/notes/:id', async (request, response) => {
  const { id } = request.params;
  try {
    notesArr = await deleteNote(id, notes);
    await response.json(notes);
  } catch (error) {
    await response.status(500).json({ error: 'Sorry, unable to delete the note.' });
  }
});

module.exports = router;