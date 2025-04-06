const bcrypt = require('bcrypt');

module.exports = {
  generateSalt: async (rounds) => {
    try {
      const salt = await bcrypt.genSalt(rounds); // Use await to handle the Promise
      return salt;
    } catch (err) {
      console.error('Error generating salt:', err);
      return null;
    }
  },
  hash: async (password, salt) => {
    try {
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (err) {
      console.error('Error hashing password:', err);
      return null;
    }
  },
  checkPassword: async (input, hash) => {
    try {
      const match = await bcrypt.compare(input, hash);
      return match;
    } catch (err) {
      console.error('Error comparing password:', err);
      return false;
    }
  },
};