import { Router } from 'express';
import userRoutes from './userRoutes.js';
import sessionRoutes from './sessionRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/session', sessionRoutes);

export default router;
