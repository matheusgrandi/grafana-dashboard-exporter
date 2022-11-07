import axios from 'axios';
import { config } from './../../config.js';

class RelatoriesRepository {
  static getInstance() {
    if (!this._instance) {
      this._instance = new RelatoriesRepository();
    }

    return this._instance;
  }

  async getDashboardData(url) {
    const { data } = await axios.get(url).catch((error) => {
      throw new Error(error);
    });

    const dashData = {
      dashboard: data.dashboard,
    };

    return dashData;
  }

  async postDashboardData(data, os, equipment) {
    data.dashboard.panels[1].options.content = `<h1>Relatório Técnico</h1>\n<ul>\n    <li>OS: ${os} </li>\n    <li>Equipamento: ${equipment}</li>\n    </ul>\n\n<p>\nRelatório feito por Huxx - Advanced Monitoring System\n</p>\nConheça mais em:\n<a>www.huxx.io</a>`;

    await axios
      .post('https://demo.huxx.io/api/dashboards/db', data, config)
      .then((response) => {
        console.log('Post success!');
      })
      .catch((error) => {
        console.log('Post fail!');
      });

    return data;
  }

  async addTag(init, end, os, equipment, id) {
    const tags = {
      dashboardId: id,
      panelId: 2,
      time: init,
      timeEnd: end,
      tags: [`${os}`, `${equipment}`],
      text: ' ',
    };

    await axios
      .post('https://demo.huxx.io/api/annotations/', tags, config)
      .then((response) => {
        console.log('Tag success!');
      })
      .catch((error) => {
        console.log('Tag Fail');
      });
  }

  generateRelatory() {}
}

export { RelatoriesRepository };
