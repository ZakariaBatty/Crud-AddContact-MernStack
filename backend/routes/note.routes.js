// recover express
const express = require('express');

// include file controllers
const { getAllNotes, addNote, updateNote, deleteNote, noteByid } = require('../controllers/noteController');

// Create routes 
const noteRoutes = express.Router();
noteRoutes.get('/notes', getAllNotes);
noteRoutes.post('/notes/add', addNote);
noteRoutes.put('/notes/edit/:id', updateNote);
noteRoutes.delete('/notes/:id', deleteNote);
noteRoutes.get('/notes/:id', noteByid);


// export routes
module.exports = {
    noteRoutes
}


