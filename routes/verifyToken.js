const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader){
jwt.verify(token , rocess.env.JWT_SEC , (err,user)=>{
    if (err){
        return res.status(401).send({err: 'No token provided'});      
    }else{
        
    }
})
    }else{
 return res.status(401).send({error: 'No token provided'});
    }
}