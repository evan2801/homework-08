const router = require('express').Router()
const fs = require('fs')
const path = require('path')
let notes = require("../data/notes.json");

router.get('/notes', function (req, res) {
  res.json(notes)
})
a
router.delete('/notes/:id', function (req, res) {
  notes = notes.filter(note => note.id !== parseInt(req.params.id))

  fs.writeFile(path.join(__dirname, "../data/notes.json"), JSON.stringify(notes),
    err => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json({
        message: "Deleted Recipe!"
      })
    })
})

router.post("/notes", function (req, res) {
    const newNote = {
      ...req.body,
      id: notes[notes.length - 1].id + 1
    };
  
    notes.push(newNote);
  
    fs.writeFile(path.join(__dirname, "../data/notes.json"), JSON.stringify(notes),
      err => {
        if (err) {
          return res.status(500).json(err);
        }
        res.status(200).json({
          message: "New Recipe!"
        })
      })
  })
  
  module.exports = router