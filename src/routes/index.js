import { Router } from 'express';
import { relatoryRoutes } from './relatory.routes.js';

const router = Router();

console.log('index.js routes');
router.use('/relatory', relatoryRoutes);

export { router };
