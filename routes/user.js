const router = require('express').Router();
const User = require("./../models/user");
const  { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } = require ('./verifyToken');

// router.get('/usergettest', (req, res) => {
//   res.send('Test is succesfull');
// }  );   // end of router.get 

// router.post('/userposttest', (req, res) => {
//   const uname = req.body.uname;
//   console.log(uname);
//   res.send(`Test is succesfull ${uname}`);
// }  );   // end of router.post 


//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization , async (req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  }catch(err){
    res.status(500).json(err);
  }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin , async (req,res)=>{
  try{
    const user= await User.findById(req.params.id);
    const {password , ...others} = user._doc;

    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
})
//GET ALL USERS
router.get("/", verifyTokenAndAdmin , async (req,res)=>{
  const query = req.query.new;
  try{
    const users= query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err);
  }
})

//GET USER STATS
router.get("/stats",verifyTokenAndAdmin, async (req,res)=>{
  const date = new Date();
  const lastYear= new Date(date.setFullYear(date.getFullYear()-1));
  console.log(lastYear);
})

module.exports = router;