const express = require('express'); // import the express package
const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
    // res.send('I\'m Alive');
    res.status(200).json({ api: 'I\'m Alive!!!' })
});

server.get('/hello', (req, res) => {
    // res.send({ hello: "Wanda" })
    res.status(200).json({ hello: "Wanda" })
})

// watch for connections on port 5000
const port = 5000
server.listen(port, () =>
    console.log(`\n >> Server running on http://localhost:${port} << \n`)
);
