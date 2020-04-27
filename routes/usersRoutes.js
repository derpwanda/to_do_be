const express = require('express')
const router = express.Router();
const Users = require('../database/models/userModels')


router.post('/signup', (req, res) => {
    const user = req.body;

    Users.add(user)
        .then(user => {
            res.status(201).json({ message: 'User Added', user });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error adding user', err });
        });
})

//get all users
router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

//get a user
router.get("/:id", (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get a users items
router.get("/:id/items", (req, res) => {
    const { userid } = req.params;

    Users.findById(userid)
        .then(user => {
            Users.getItemsByUserId(id)
                .then(items => {
                    res.status(200).json({ ...user, items });
                    console.log(user, items);
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
router.delete("/:userid", (req, res) => {
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