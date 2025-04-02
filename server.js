const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running - ready to handle requests at Port ${PORT}! 🌐`);
});