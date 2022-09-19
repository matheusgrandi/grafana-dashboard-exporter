import { Router } from 'express';
import { relatoryRoutes } from './relatory.routes.js';

const router = Router();

router.use('/relatory', relatoryRoutes);

export { router };
