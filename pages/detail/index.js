const { router } = require('../../framework/index.js');

Page({
  data: {
    distance: 0,
  },
  onLoad() {
    console.log('测试', this.$opts.name, this.$optData.name);
    this.setData({
      name: this.$opts.name || this.$optData.name,
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
  back() {
    router.pop();
  },
});
