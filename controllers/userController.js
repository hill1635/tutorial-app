// require encryptController from controllers/encrypt.js
const encrypt = require('./encryptController');
const User = require('../models/user');

module.exports = {
  createUser: async (req, res) => {
    const { email, password } = req.body;
    const salt = await encrypt.generateSalt(10);
    const hash = await encrypt.hash(password, salt);
    
    User.create({
      email: email,
      password: hash,
    })
    .then((dbUser) => {
      console.log('User created:', dbUser);
      res.json(dbUser);
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).json(err);
    });
  },
};