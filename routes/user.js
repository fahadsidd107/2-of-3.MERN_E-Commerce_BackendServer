const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
}  );   // end of router.get 

module.exports = router;