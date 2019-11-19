const { router } = require('../../framework/index.js');

Page({
  // onShareAppMessage() {
  //   return config.shareData;
  // },
  navigate: router.navigate,
  queryTo() {
    // wx.navigateTo({
    //   url: '/pages/message/index',
    // });
    router.push({
      name: 'message',
      query: {
        name: 'Ming',
      },
    })
  },
  dataTo() {
    router.push({
      name: 'message',
      data: {
        name: 'Anny',
      },
    })
  },
});
