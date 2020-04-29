const express = require('express')
const router = express.Router();

const Users = require('../database/models/userModels')

const protected = require('../authentication/middleware/restrict')


//get all users
router.get("/", protected, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

//get a user
router.get("/:id", (req, res, next) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get a users notes
router.get("/:id/notes", protected, (req, res, next) => {
    const { userid } = req.params;

    Users.findById(userid)
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
router.delete("/:userid", protected, (req, res, next) => {
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