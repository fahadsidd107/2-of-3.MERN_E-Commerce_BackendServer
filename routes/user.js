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

router.delete("/:id", async (req,res)=>{})


module.exports = router;