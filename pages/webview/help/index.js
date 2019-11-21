const { config } = require('../../../framework/index.js');

Page({
  data: {
    src: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const { id } = this.$opts;
    const { faqTable } = config;
    const info = faqTable[id];

    if (info) {
      console.log('webview', info);
      this.setData({
        src: decodeURIComponent(info.url),
      });

      wx.setNavigationBarTitle({
        title: info.title,
      });

      this.info = info;
    }
  },
});
