const express = require('express');
const app = express();
const PORT = 7777

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);;
})