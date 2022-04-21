const router = require('express').Router();
const  { verifyToken,verifyTokenAndAuthorization } =require  ('./verifyToken');

// router.get('/usergettest', (req, res) => {
//   res.send('Test is succesfull');
// }  );   // end of router.get 

// router.post('/userposttest', (req, res) => {
//   const uname = req.body.uname;
//   console.log(uname);
//   res.send(`Test is succesfull ${uname}`);
// }  );   // end of router.post 

router.put('/:id', verifyTokenAndAuthorization , (req,res)=>{
 if(req.body.password){
    req.body.password= CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
 }
})

module.exports = router;