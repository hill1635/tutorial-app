// Import encryptController from controllers/encrypt.js
import * as encrypt from './encryptController.js';
import User from '../models/user.js';
const INTERNAL_SERVER_ERROR = 500;
const BAD_REQUEST = 400;
const OK = 200;
const ROUNDS = 10;

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await encrypt.generateSalt(ROUNDS);
    const hash = await encrypt.hash(password, salt);

    User.create({
      email: email,
      password: hash,
    })
      .then((dbUser) => {
        const returnData = {
          messages: [
            {
              flag: 'success',
              message: 'User created successfully',
              value: email,
            },
          ],
          ...dbUser,
        };
        res.json(returnData);
      })
      .catch((err) => {
        if (err.name === 'MongoServerError') {
          res.json({
            messages: [
              {
                flag: 'fail',
                field: 'email',
                message: 'Email already exists',
                value: email,
              },
            ],
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
    res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};
