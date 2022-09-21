import { RelatoriesRepository } from '../../../repositories/RelatoriesRepository.js';
import { GenerateRelatoryController } from './GenerateRelatoryController.js';
import { GenerateRelatoryUseCase } from './GenerateRelatoryUseCase.js';

const relatoriesRepository = RelatoriesRepository.getInstance();
console.log(relatoriesRepository);

const generateRelatoryUseCase = new GenerateRelatoryUseCase(
  relatoriesRepository
);

const generateRelatoryController = new GenerateRelatoryController(
  generateRelatoryUseCase
);

export { generateRelatoryController };
