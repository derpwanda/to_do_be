const express = require('express');
const logger = require('./middleware/logger')
const notesRoutes = require('./routes/notesRoutes')
const welcomeRoute = require('./routes/welcomeRoute')

const server = express(); // creates the server
server.use(express.json()) //every route in project uses json as default

server.use(logger)

server.use('/welcome', welcomeRoute)
server.use('/notes', notesRoutes) //server midware, create /notes portion of url

//fallback for wrong request (put after routes always)
server.use(function (req, res) {
    res.status(404).send('Wrong! This doesn\'t work!')
})

// watch for connections on port 5000
const port = 5000
server.listen(port, () =>
    console.log(`\n >> Server running on http://localhost:${port} << \n`)
);

