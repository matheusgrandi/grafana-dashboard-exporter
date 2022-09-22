class RelatoriesRepository {
  static getInstance() {
    if (!this._instance) {
      this._instance = new RelatoriesRepository();
    }

    return this._instance;
  }

  async getDashboardData() {
    const { data } = await axios
      .get('https://demo.huxx.io/api/dashboards/uid/h9SVG1p7k')
      .catch((error) => {
        throw new Error(error);
      });

    return data.dashboard;
  }

  postDashboardData(data, os, equipment) {
    data.panels[1].options.content = `<h1>Relatório Técnico</h1>\n<ul>\n    <li>OS: ${os} </li>\n    <li>Equipamento: ${equipment}</li>\n    </ul>\n\n<p>\nRelatório feito por Huxx - Advanced Monitoring System\n</p>\nConheça mais em:\n<a>www.huxx.io</a>`;

    return data;
  }

  generateRelatory() {}
}

export { RelatoriesRepository };
