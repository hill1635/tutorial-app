// Import encryptController from controllers/encrypt.js
import * as encrypt from './encryptController.js';
import bcrypt from 'bcrypt';
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

export const login = async (req, res) => {
  try {
    User.find({ email: req.body.email })
      .then((dbModel) => {
        if (!dbModel) {
          res.status(BAD_REQUEST);
          return res.status(BAD_REQUEST).send({ message: 'Email is incorrect.' });
        }

        if (!bcrypt.compareSync(req.body.password, dbModel[0].password)) {
          return res.status(BAD_REQUEST).send({ message: 'Password is invalid.' });
        }

        req.session.save(() => {
          req.session.loggedIn = true;
          req.session.user = dbModel[0]._id;
          res.status(OK).json({ user: req.body.email, id: dbModel[0]._id });
        });
      })
      .catch((err) => res.status(INTERNAL_SERVER_ERROR).json(err));
  } catch (err) {
    console.error('Error in login:', err);
    res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};