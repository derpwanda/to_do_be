const express = require('express');
const notesRoutes = require('./notes/notesRoutes')
const server = express(); // creates the server

server.use('/notes', notesRoutes) //server midware, create /notes portion of url


// watch for connections on port 5000
const port = 5000
server.listen(port, () =>
    console.log(`\n >> Server running on http://localhost:${port} << \n`)
);
