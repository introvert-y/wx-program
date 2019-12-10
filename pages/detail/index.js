// const { config } = require('../../framework/index.js');

Page({
  data: {
    distance: 0,
  },
  onReady() {
    this.setData({
      distance: wx.getSystemInfoSync().statusBarHeight,
    });
    console.log(wx.getSystemInfoSync().statusBarHeight);
  },
  // onShareAppMessage() {
  //   return config.shareData;
  // },
});
