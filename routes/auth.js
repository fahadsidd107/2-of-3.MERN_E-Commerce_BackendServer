const router = require('express').Router();
const User = require('./../models/user');

//Register
router.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        username: req.body.username,
        username: req.body.username,
        username: req.body.username,
    })
})


module.exports = router;