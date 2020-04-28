const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')

const authRoutes = require('./authentication/authRoutes')
const userRoutes = require('./routes/usersRoutes')
const notesRoutes = require('./routes/notesRoutes') //midware

const server = express(); // creates the server

const sessionConfig = {
    name: 'watercolor', //sid
    secret: 'quinacridone gold is my favorite',
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 24 h
        secure: false, //true in production
        httpOnly: true, //not accessible w js
    },
    resave: false,
    saveUninitialized: false, //GDPR compliance, asks to set cookies
}

server.use(helmet());
server.use(express.json()) //every route in project uses json as default
server.use(cors())
server.use(session(sessionConfig))

server.get('/', (req, res) => {
    res.send('Welcome to my To Do Application!')
})

server.use('/auth', authRoutes)
server.use('/users', userRoutes)
server.use('/notes', notesRoutes) //server midware, create /notes portion of url

const port = 5000
server.listen(port, () =>
    console.log(`\n >> Server running on http://localhost:${port} << \n`)
);

