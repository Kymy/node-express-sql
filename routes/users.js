var express = require('express');
const { User } = require('../sequelize')

var router = express.Router();

router.get('/', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
});

router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
})

module.exports = router;


