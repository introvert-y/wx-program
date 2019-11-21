const { router, config, req } = require('../../framework/index.js');

Page({
  data: {
    faq: config.faqTable[15],
  },
  onReady() {
    this.getList();
  },
  navigate: router.navigate,
  getList() {
    req.common.getMetaData()
      .then((r1) => {
        console.log(r1);
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
