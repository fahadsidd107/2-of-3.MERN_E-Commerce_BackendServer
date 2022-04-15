const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 7777
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('./routes/user');

mongoose.connect( process.env.MANGO_DB_URL)
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log(err))

// app.get('/api' , ()=>console.log('Test API'))

app.use('/api/user', userRoute);


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);;
})