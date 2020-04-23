const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('hello from notesRouter')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).send('hello rom the user by id')
})

router.post('/', (res, req) => {
    res.status(200).send('hello from post')
})

/* // handle requests to the root of the api, the / route
router.get('/', (req, res) => {
    // res.send('I\'m Alive');
    res.status(200).json({ api: 'to_do_be I\'m Alive!!!' })
});

// ENDPOINTS
//get notes
router.get('/', (req, res) => {
    db('notes')
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(500).json(err));
})

//addnote
router.post('/', (req, res) => {
    const note = req.body;

    db('notes')
        .insert(note)
        .then(ids => { id: ids[0] })
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

    db('notes')
        .where({ id: noteid })
        .then(note => res.status(200).json(note))
        .catch(error => res.status(500).json(error))
})

//edit note by id
router.put('/:noteid', (req, res) => {
    const changes = req.body;
    const { noteid } = req.params;

    db('notes')
        .where({ id: noteid })
        .update(changes)
        .then(note => {
            res.status(200).json({ note });
        })
        .catch(error => res.status(500).json(error));
});

//delete
router.delete('/:noteid', (req, res) => {
    const { noteid } = req.params; //deconstruct style
    db('notes')
        .where({ id: noteid })
        .del()
        .then(note => {
            res.status(204).json({ note });
        })
        .catch(error => res.status(500).json(error));
}); */

//export routers
module.exports = router;