class GenerateRelatoryUseCase {
  constructor(relatoriesRepository) {
    this.relatoriesRepository = relatoriesRepository;
  }
  execute() {
    console.log(this.relatoriesRepository.getDashboardData());
  }
}

export { GenerateRelatoryUseCase };
