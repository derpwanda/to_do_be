const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../database/models/userModels')
const auth = require('../middleware/auth')


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

//get all users
router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

//get a single user by id
router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    Users.findById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get a users notes
router.get("/:id/notes", (req, res, next) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            Users.getNotesByUserId(id)
                .then(notes => {
                    res.status(200).json({ ...user, notes });
                    console.log(user, notes);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//delete a user by id
router.delete("/:userid", (req, res, next) => {
    const { userid } = req.params;

    Users.deleteUser(userid)
        .then(deletedUser => {
            res.status(200).json({ message: "User successfully deleted." });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;