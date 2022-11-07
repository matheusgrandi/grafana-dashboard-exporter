class GenerateRelatoryController {
  constructor(generateRelatoryUseCase) {
    this.generateRelatoryUseCase = generateRelatoryUseCase;
  }

  async handle(request, response) {
    const { init, end, name, os } = request.body;

    await this.generateRelatoryUseCase.execute({
      init,
      end,
      name,
      os,
    });

    return response.status(201).send();
  }
}

export { GenerateRelatoryController };
