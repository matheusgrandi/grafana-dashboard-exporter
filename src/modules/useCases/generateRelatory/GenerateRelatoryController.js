class GenerateRelatoryController {
  constructor(generateRelatoryUseCase) {
    this.generateRelatoryUseCase = generateRelatoryUseCase;
  }

  async handle(request, response) {
    const { init, end, name, os, url } = request.body;

    const data = await this.generateRelatoryUseCase.execute({
      init,
      end,
      name,
      os,
      url,
    });

    return response.status(201);
  }
}

export { GenerateRelatoryController };
