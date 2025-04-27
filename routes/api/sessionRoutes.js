import { Router } from 'express';
import { login, logout, getSession } from '../../controllers/sessionController.js';

const router = Router();

router.route('/').get(getSession);
router.route('/login').post(login);
router.route('/logout').post(logout);

export default router;