import { Router } from 'express';
import { login } from '../../controllers/sessionController.js';

const router = Router();

router.route('/login').post(login);

export default router;