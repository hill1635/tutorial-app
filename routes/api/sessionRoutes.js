import { Router } from 'express';
import { login, getSession } from '../../controllers/sessionController.js';

const router = Router();

router.route('/').get(getSession);
router.route('/login').post(login);

export default router;