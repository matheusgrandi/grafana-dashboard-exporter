class GenerateRelatoryUseCase {
  constructor(relatoriesRepository) {
    this.relatoriesRepository = relatoriesRepository;
  }
  async execute({ init, end, name, os }) {
    const dashboard = await this.relatoriesRepository.getDashboardData();

    const post_dashboard = this.relatoriesRepository.postDashboardData(
      dashboard,
      os,
      name
    );

    // this.relatoriesRepository.generateRelatory();

    return post_dashboard;
  }
}

export { GenerateRelatoryUseCase };
