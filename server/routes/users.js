const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User 
        .find()
        .then(users => {
            res.status(200).json(users)
        });
});

router.get('/:id', (req, res) => {
    User    
        .findById(req.params.id) //why req.params.id here?  How would this be used in real world situation?
        .then(findUser => {
            if(!findUser) { return res.status(404).end(); }
            return res.status(200).json(findUser);
        }) 
});
//instead of hardcoding "Garrett", this would most likely be a form submission so you could use req.body.firstName etc...
router.post('/', (req, res) => {
    var user = new User(req.body)

    user.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, user)
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    User
        .findByIdAndUpdate(id, { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        .then(users => {
            res.status(204).json(users)
        })
});

router.delete('/:id' ,(req, res) => {
    const id = req.params.id
    User
        .findByIdAndRemove(id)
        .then(users => {
            if(users) res.status(200).json(users);
        });
});

module.exports = router;