const config = require('../../config/index.js');
const { req } = require('../prototype.js');

module.exports = {
  // 获取通用字典
  getMetaData() {
    const url = `${config.apiUrl}/business-api/api/sys/dict/getCommonDataDicts`;
    return req({ url });
  },
  // 获取用户信息
  getInfoByUserId(data) {
    const url = `${config.apiUrl}/business-api/api/worker/getWorkerDetails/${data.userId}`;
    return req({ url });
  },
  // 获取申请入场人数
  getJoinApplicationCounts(data) {
    const url = `${config.apiUrl}/business-api/api/worker/getWorkerApplyNumber`;
    return req({ url, data });
  },
  // 获取申请入场列表
  getJoinApplications(data) {
    const url = `${config.apiUrl}/business-api/api/project/getProjectApplyList`;
    return req({ url, data, method: 'POST' });
  },
};
