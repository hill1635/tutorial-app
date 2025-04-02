const bcrypt = require('bcrypt');

module.exports = {
  salt: async (rounds) => {
    bcrypt.genSalt(rounds, (err, salt) => {
      if (err) {
        console.error('Error generating salt:', err);
        return null;
      }
      return salt;
    });
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
};