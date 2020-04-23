const express = require('express'); // import the express package
const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
    // res.send('I\'m Alive');
    res.status(200).json({ api: 'to_do_be I\'m Alive!!!' })
});

// ENDPOINTS
//get notes
server.get('/api/notes', (req, res) => {
    db('notes')
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(500).json(err));
})

//addnote
server.post('/api/notes', (req, res) => {
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
server.get('/api/notes/:noteid', (req, res) => {
    const { noteid } = req.params;

    db('notes')
        .where({ id: noteid })
        .then(note => res.status(200).json(note))
        .catch(error => res.status(500).json(error))
})

//edit note by id
server.put('/api/notes/:noteid', (req, res) => {
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
server.delete('/api/notes/:noteid', (req, res) => {
    const { noteid } = req.params; //deconstruct style
    db('notes')
        .where({ id: noteid })
        .del()
        .then(note => {
            res.status(204).json({ note });
        })
        .catch(error => res.status(500).json(error));
});

// watch for connections on port 5000
const port = 5000
server.listen(port, () =>
    console.log(`\n >> Server running on http://localhost:${port} << \n`)
);
