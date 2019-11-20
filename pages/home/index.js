const { router } = require('../../framework/index.js');

Page({
  // onShareAppMessage() {
  //   return config.shareData;
  // },
  onReady() {
    const arr = [1, 2, 3].map((item) => ({ id: item }));
    arr.map((obj) => {
      obj.name = '111';
      return obj;
    });
    const obj = {
      b: {
        name: 'Ming',
      },
    };
    const clone = this.deepCopyTwo(obj);
    console.log(clone);
    obj.b.name = '2222';
    console.log(clone);
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
  deepCopyTwo(obj) {
    const that = this;
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          objClone[index] = that.deepCopyTwo(item);
        } else {
          // 如果不是，简单复制
          objClone[index] = item;
        }
      });
    }
    return objClone;
  },
});
