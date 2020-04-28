const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../database/models/userModels')

router.post('/signup', (req, res, next) => {
    const user = req.body

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    console.log('hello from user router signup')
    Users.add(user)
        .then(saved => {
            const { id, username } = user
            res.status(201).json({ message: 'User Added', username });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error adding user', err });
        });
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

module.exports = router;