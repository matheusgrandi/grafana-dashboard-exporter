import axios from 'axios';
import { config } from './../../config.js';
import puppeteer from 'puppeteer';

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

  async generateRelatory(os, init, end) {
    const url1 = `https://demo.huxx.io/d/h9SVG1p7k/relatorio?orgId=2&from=${init}&to=${end}&theme=light&kiosk`;
    const url1b = `https://demo.huxx.io/d/u0D-V9l7z/relatorio-2?orgId=2&from=${init}&to=${end}&theme=light&kiosk`;
    const url3 = `https://demo.huxx.io/d/MZeU8yW4z/relatorio-jiga?orgId=2&from=${init}&to=${end}&theme=light&kiosk`;
    const url3b = `https://demo.huxx.io/d/nKF_UyWVk/relatorio-2-jiga?orgId=2&from=${init}&to=${end}&theme=light&kiosk`;

    //Screenshot
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: true,
      args: ['--no-sandbox'],
    });

    const page = await browser.newPage();

    await page.goto(url1, {
      waitUntil: 'networkidle2',
    });

    await page.setViewport({
      width: 1920,
      height: 2100,
    });

    await page.evaluate(() => {
      document.querySelector('.grafana-app').style.height = `${
        document.querySelector('.dashboard-container .layout').clientHeight +
        16 * 2
      }px`;
    });

    await page.goto(url1, {
      waitUntil: 'networkidle2',
    });

    await page.screenshot({
      omitBackground: true,
      path: `///mnt/local/Qualidade/Huxx/${os}.png`,
      fullPage: true,
    });

    await page.goto(url1b, {
      waitUntil: 'networkidle2',
    });

    await page.screenshot({
      omitBackground: true,
      path: `///mnt/local/Qualidade/Huxx/${os}-b.png`,
      fullPage: true,
    });

    await page.goto(url3, {
      waitUntil: 'networkidle2',
    });

    await page.screenshot({
      omitBackground: true,
      path: `///mnt/local/Qualidade/Huxx/${os}-3.png`,
      fullPage: true,
    });

    await page.goto(url3b, {
      waitUntil: 'networkidle2',
    });

    await page.screenshot({
      omitBackground: true,
      path: `///mnt/local/Qualidade/Huxx/3-${os}-3b.png`,
      fullPage: true,
    });

    console.log('image saved!');

    browser.close();
  }
}

export { RelatoriesRepository };
