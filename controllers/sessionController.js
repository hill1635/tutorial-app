import { checkPassword } from './encryptController.js';
import User from '../models/user.js';
const INTERNAL_SERVER_ERROR = 500;
const BAD_REQUEST = 400;
const OK = 200;

export const login = async (req, res) => {
  try {
    User.find({ email: req.body.email })
      .then((dbModel) => {
        if (!dbModel) {
          res.status(BAD_REQUEST);
          return res
            .status(BAD_REQUEST)
            .send({ message: 'Email is incorrect.' });
        }

        const validPassword = checkPassword(
          req.body.password,
          dbModel[0].password,
        );

        if (!validPassword) {
          return res
            .status(BAD_REQUEST)
            .send({ message: 'Password is invalid.' });
        } else {
          req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = {
              id: dbModel[0]._id,
              email: dbModel[0].email,
            };
            res.status(OK).json(req.session.user);
          });
        }
      })
      .catch((err) => res.status(INTERNAL_SERVER_ERROR).json(err));
  } catch (err) {
    console.error('Error in login:', err);
    res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};

export const logout = async (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(OK).json({ message: 'Logged out successfully.' });
      });
    } else {
      res.status(OK).json({ message: 'No session found.' });
    }
  } catch (err) {
    console.error('Error in logout:', err);
    res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};

export const getSession = async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.status(OK).json(req.session.user);
    } else {
      res.status(OK).json(null);
    }
  } catch (err) {
    console.error('Error in getSession:', err);
    res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};
