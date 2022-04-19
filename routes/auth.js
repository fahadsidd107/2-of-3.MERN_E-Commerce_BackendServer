const router = require('express').Router();
const User = require('./../models/user');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})


//Login
router.post('/login',async (req,res)=>{
    try{
 const user = await User.findOne({email: req.body.email})

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;