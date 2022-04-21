const router = require('express').Router();
const  { verifyToken } =require  ('./verifyToken');

// router.get('/usergettest', (req, res) => {
//   res.send('Test is succesfull');
// }  );   // end of router.get 

// router.post('/userposttest', (req, res) => {
//   const uname = req.body.uname;
//   console.log(uname);
//   res.send(`Test is succesfull ${uname}`);
// }  );   // end of router.post 

router.put('/:id', verifyToken , (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        res.send('You are the owner of this user');
    }
})

module.exports = router;