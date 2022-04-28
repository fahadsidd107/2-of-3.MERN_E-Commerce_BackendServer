const router = require("express").Router();
const Cart = require("./../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE CART
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE PRODUCT
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CART
router.delete("/:id", verifyTokenAndAuthorization , async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CART
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const Newquery = req.query.new;
  const Categoryquery = req.query.category;
  try {
let products

    if (Newquery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    }else if(Categoryquery){
      products = await Product.find({categories:{$in:[Categoryquery]}});
    }else{
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;