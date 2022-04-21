const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader){

    }else{
 return res.status(401).send({error: 'No token provided'});
    }
}