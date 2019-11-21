/**
 * 类似于字典
 */
const apiUrlTable = require('./api_url_table.js');
const cdnPathTable = require('./cdn_path_table.js');
const faqTable = require('./faq_table.js');
const roleType = require('./roleType.js');

let apiEnv = 'dev';
// let apiEnv = 'online';
const cdnPath = cdnPathTable.online;

/**
 * 获取默认时区
 */
function getDefaultTimeZone() {
  return {
    id: '4410f3ebea4211e9b85d52540023cd6c',
    name: '中国',
    code: 'Asia/Chongqing',
  };
}

const config = {
  apiUrl: apiUrlTable[apiEnv],
  cdnPath,
  shareData: {
    title: '墨计考勤 | 建筑施工管理神器',
    path: '/pages/index/index',
  },
  defaultAvt: `${cdnPath}/img/default-face.png`,
  faqTable,
  updateApiUrl,
  roleType,
  getDefaultTimeZone,
};

/**
 * 设置apiUrl
 * @param {string} env
 */
function updateApiUrl(env) {
  apiEnv = env;
  config.apiUrl = apiUrlTable[env];
}

module.exports = config;
