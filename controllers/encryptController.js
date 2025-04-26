import bcrypt from 'bcrypt';

export const generateSalt = async(rounds) => {
  try {
    const salt = await bcrypt.genSalt(rounds);
    return salt;
  } catch (err) {
    console.error('Error generating salt:', err);
    return null;
  }
};

export const hash = async(password, salt) => {
  try {
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.error('Error hashing password:', err);
    return null;
  }
};

export const checkPassword = async(input, hash) => {
  try {
    const match = await bcrypt.compare(input, hash);
    return match;
  } catch (err) {
    console.error('Error comparing password:', err);
    return false;
  }
};