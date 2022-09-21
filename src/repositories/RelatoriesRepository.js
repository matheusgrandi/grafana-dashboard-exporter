class RelatoriesRepository {
  static getInstance() {
    if (!this._instance) {
      this._instance = new RelatoriesRepository();
    }

    return this._instance;
  }

  getDashboardData() {}

  postDashboardData() {}

  generateRelatory() {}
}

export { RelatoriesRepository };
