// require encryptController from controllers/encrypt.js
const encrypt = require('./encryptController');
const User = require('../models/user');

module.exports = {
  createUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const salt = await encrypt.generateSalt(10);
      const hash = await encrypt.hash(password, salt);

      User.create({
        email: email,
        password: hash,
      })
      .then((dbUser) => {
        const returnData = {
          messages: [{flag: 'success', message: 'User created successfully', value: email}],
          ...dbUser
        };
        res.json(returnData);
      })
      .catch((err) => {
        console.log('Error creating user:', err.name);
        if (err.name === 'MongoServerError') {
          res.json({ 
            messages: [{ flag: 'fail', field: 'email', message: 'Email already exists', value: email }],
           });
        } else if (err.name === 'ValidationError') {
          const errorDetails = Object.keys(err.errors).map((key) => {
            const error = err.errors[key];
            return {
              flag: 'fail',
              field: error.path,
              message: error.message,
              value: error.value,
            };
          });
          res.json({ messages: errorDetails });
        }
    
      });
    } catch (err) {
      console.error('Error in createUser:', err);
      res.status(500).json(err);
    }
  },
};