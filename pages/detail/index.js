// const { config } = require('../../framework/index.js');

Page({
  data: {
    distance: 0,
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
  // onShareAppMessage() {
  //   return config.shareData;
  // },
});
