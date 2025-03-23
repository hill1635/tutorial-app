const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running - ready to handle requests at Port ${PORT}! 🌐`);
});