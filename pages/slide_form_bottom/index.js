const { config } = require('../../framework/index.js');

Page({
  data: {
    isMore: false,
    sliderBox: {
      height: 0,
      initHeight: 280,
      minHeight: 100,
    },
  },
  onReady() {
    this.caculateBoxHeight();
  },
  onShareAppMessage() {
    return config.shareData;
  },
  caculateBoxHeight() {
    const that = this;
    const query = wx.createSelectorQuery();
    query.select('.slider_box').boundingClientRect((rect) => {
      const clientHeight = rect.height;
      const clientWidth = rect.width;
      const ratio = 750 / clientWidth;
      const height = clientHeight * ratio;
      that.setData({
        'sliderBox.height': Math.floor(height / 2),
      });
    }).exec();
  },
});
