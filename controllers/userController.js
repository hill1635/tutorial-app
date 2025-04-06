// require encryptController from controllers/encrypt.js
const encrypt = require('./encryptController');

module.exports = {
  createUser: async (req, res) => {
    const { email, password } = req.body;
    const salt = await encrypt.generateSalt(10);
    const hash = await encrypt.hash(password, salt);
  },
};