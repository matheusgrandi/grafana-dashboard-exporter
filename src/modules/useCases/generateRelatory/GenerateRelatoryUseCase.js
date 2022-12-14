class GenerateRelatoryUseCase {
  constructor(relatoriesRepository) {
    this.relatoriesRepository = relatoriesRepository;
  }

  async execute({ init, end, name, os }) {
    const dashboard = await this.relatoriesRepository.getDashboardData(
      'https://demo.huxx.io/api/dashboards/uid/h9SVG1p7k'
    );

    const dashboard3x = await this.relatoriesRepository.getDashboardData(
      'https://demo.huxx.io/api/dashboards/uid/MZeU8yW4z'
    );

    this.relatoriesRepository.postDashboardData(dashboard, os, name);

    this.relatoriesRepository.postDashboardData(dashboard3x, os, name);

    this.relatoriesRepository.addTag(init, end, os, name, 3);
    this.relatoriesRepository.addTag(init, end, os, name, 21);

    await this.relatoriesRepository.generateRelatory(os, init, end);
  }
}

export { GenerateRelatoryUseCase };
