class GenerateRelatoryController {
  constructor(generateRelatoryUseCase) {
    this.generateRelatoryUseCase = generateRelatoryUseCase;
  }

  async handle(request, response) {
    const { init, end, name, os, url } = request.body;

    this.generateRelatoryUseCase.execute();

    return response.status(201).send();
  }
}

export { GenerateRelatoryController };
