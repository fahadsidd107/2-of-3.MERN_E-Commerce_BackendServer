const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, rocess.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).send({ err: "token is not valid" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).send({ error: "No token provided" });
  }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).send({error:"You are not authorized todo this action"})
        }
    })
}

module.exports={ verifyToken,verifyTokenAndAuthorization };