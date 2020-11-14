const { router, config, req } = require('../../framework/index.js');

Page({
  data: {
    faq: config.faqTable[15],
    isShow: false,
    startX: 0,
    endX: 0,
    animationData: {},
  },
  onReady() {
  },
  navigate: router.navigate,
  getList() {
    req.common.getMetaData().then((r1) => {
      console.log(r1);
    });
  },
  touchstart(e) {
    this.setData({
      startX: e.touches[0].clientX,
    });
    // console.log('touchstart', e.touches[0].clientX);
  },
  touchmove(e) {
    const { startX, isShow } = this.data;
    console.log('touchend', e.changedTouches[0].clientX);
    if (startX - e.changedTouches[0].clientX > 0 && !isShow) {
      // console.log('显示');
      this.Show();
    } else if (startX - e.changedTouches[0].clientX < 0 && isShow) {
      // console.log('隐藏');
      this.hide();
    }
    this.setData({
      endX: e.changedTouches[0].clientX,
    });
  },
  Show() {
    this.setData({
      isShow: true,
    });
  },
  hide() {
    this.setData({
      isShow: false,
    });
  },
  queryTo() {
    // wx.navigateTo({
    //   url: '/pages/message/index',
    // });
    router.push({
      name: 'message',
      query: {
        name: 'Ming',
      },
    });
  },
});
