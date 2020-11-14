const { config } = require('../../framework/index.js');

const list = [
  {
    id: 1,
    name: '中国建设集团三局广州分公司',
    shortName: '中建三局',
  },
  {
    id: 2,
    name: '中国建设集团四局广州分公司',
    shortName: '中建四局',
  },
  {
    id: 3,
    name: '中建设银行地铁项目',
    shortName: null,
  },
];

Page({
  data: {
    list,
    keyWord: '中建',
  },
  onShareAppMessage() {
    return config.shareData;
  },
});
