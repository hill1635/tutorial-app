import { Router } from 'express';
import { createUser, login } from '../../controllers/userController.js';

const router = Router();

router.route('/').post(createUser);
router.route('/login').post(login);

export default router;
