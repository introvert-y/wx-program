const { config } = require('../../framework/index.js');

const height = wx.getSystemInfoSync().windowHeight;

Page({
  data: {
    sticky: false,
    opacity: 0,
    height,
  },
  onShareAppMessage() {
    return config.shareData;
  },
});
