const { router } = require('../../framework/index.js');

Page({
  onReady() {
    const arr = [1,2,3].map((item) => ({id:item}));
    arr.map((obj) => {
      obj.name = '111';
      return obj;
    });
  },
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
    });
  },
  dataTo() {
    router.push({
      name: 'message',
      data: {
        name: 'Anny',
      },
    });
  },
});
