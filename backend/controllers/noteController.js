// recover model
const { Mongoose } = require('mongoose');
const Note = require('../models/noteModel');

// function for recover all note
const getAllNotes = (req, res) => {
  Note.find((err, notes) => {
    if (err || !notes) {
      return res.json({
        err: 'No date',
      });
    }
    res.json({ notes });
  }).select('title body createdAt');
};

// function for add note
const addNote = (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const newNote = new Note({ title, body });
  newNote
    .save()
    .then(() => {
      res.json('note added');
    })
    .catch((err) => console.log(err));
};

// function for update Note
const updateNote = (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.body = req.body.body;

      note
        .save()
        .then(() => {
          res.json('note update');
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

// function for deleted
const deleteNote = (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then((note) => {
      res.json('note deletes');
    })
    .catch((err) => console.log(err));
};

// recover id
const noteByid = (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      res.json(note);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
  noteByid,
};
