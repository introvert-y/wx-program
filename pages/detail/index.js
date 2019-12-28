// const { config } = require('../../framework/index.js');
const { areaMap, city } = require('./data.js');

Page({
  data: {
    distance: 0,
    multiIndex: [0, 0, 0],
    multiArray: [['不限'], ['不限'], ['不限']],
  },
  onLoad() {
    this.setData({
      'multiArray[0]': Object.keys(areaMap),
    });
  },
  onReady() {
    this.setData({
      distance: wx.getSystemInfoSync().statusBarHeight,
    });
  },
  onPullDownRefres() {
    setTimeout(() => {
      console.log('下拉刷新');
    }, 3000);
  },
  onReachBottom() {
    setTimeout(() => {
      console.log('触底');
    }, 3000);
  },
  bindMultiPickerChange(e) {
    this.setData({
      multiIndex: e.detail.value,
    });
  },
  bindMultiPickerColumnChange(e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    const { multiArray, multiIndex } = this.data;
    const data = {
      multiArray,
      multiIndex,
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        data.multiArray[1] = areaMap[multiArray[0][`${e.detail.value}`]].include;
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        data.multiArray[2] = ['不限'].concat(city[multiArray[1][`${e.detail.value}`]]);
        data.multiIndex[2] = 0;
        break;
      default: break;
    }
    this.setData(data);
  },
  // onShareAppMessage() {
  //   return config.shareData;
  // },
});
