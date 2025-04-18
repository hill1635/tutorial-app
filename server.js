const express = require('express');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const PORT = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionData = {
  secret: 'secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tutorial-app',
    ttl: 14 * 24 * 60 * 60,
  }),
};

app.use(session(sessionData));

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tutorial-app',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running - ready to handle requests at Port ${PORT}! 🌐`);
});