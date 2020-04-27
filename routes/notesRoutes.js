const express = require('express')
const router = express.Router();
const Notes = require('../database/models/noteModels')

// ENDPOINTS
//get notes
router.get('/', (req, res) => {
    Notes.find()
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(500).json(err));
})

//addnote
router.post('/', (req, res) => {
    const note = req.body;

    Notes.add(note)
        .then(note => {
            res.status(201).json({ message: 'Note Added', note });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error inserting note', err });
        });
});

//view note by id
router.get('/:noteid', (req, res) => {
    const { noteid } = req.params;

    Notes.findById(noteid)
        // .where({ id: noteid })
        .then(note => res.status(200).json(note))
        .catch(error => res.status(500).json(error))
})

//edit note by id
router.put('/:noteid', (req, res) => {
    const changes = req.body;
    const { noteid } = req.params;

    Notes.update(changes, noteid)
        .then(note => {
            res.status(200).json({ note });
        })
        .catch(error => res.status(500).json(error));
});

//delete
router.delete('/:noteid', (req, res) => {
    const { noteid } = req.params; //deconstruct style

    Notes.remove(noteid)
        .then(note => {
            res.status(204).json({ note });
        })
        .catch(error => res.status(500).json(error));
});

//export routers
module.exports = router;