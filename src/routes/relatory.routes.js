import { Router } from 'express';
import { generateRelatoryController } from '../modules/useCases/generateRelatory/index.js';

const relatoryRoutes = Router();

relatoryRoutes.post('/generate', (request, response) => {
  return generateRelatoryController.handle(request, response);
});

export { relatoryRoutes };
