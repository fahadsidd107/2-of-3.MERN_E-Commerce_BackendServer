const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 7777

// mongoose.connect('mongodb+srv://admin:admin@cluster0.crcc2.mongodb.net/ecommerce?retryWrites=true&w=majority');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);;
})