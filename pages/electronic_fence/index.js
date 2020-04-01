const { config } = require('../../framework/index.js');

const optionMap = {
  circle: '00',
  line: '01',
  polygon: '02',
};

Page({
  data: {
    crt: optionMap.circle,
    optionMap,
  },
  onShareAppMessage() {
    return config.shareData;
  },
  changeCrt(e) {
    const { info } = e.currentTarget.dataset;
    const { crt } = this.data;
    if (info === crt) {
      return;
    }
    this.setData({
      crt: info,
    });
  },
});
