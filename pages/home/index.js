const { router } = require('../../framework/index.js');

Page({
  // onShareAppMessage() {
  //   return config.shareData;
  // },
  onReady() {
    const arr = [1,2,3].map(item => ({id: item,}));
    arr.map(obj => {
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
  deepCopyTwo(obj) {
    const that = this;
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj == 'object') {
        for (const key in obj) {
            //判断obj子元素是否为对象，如果是，递归复制
            if (obj[key] && typeof obj[key] === "object") {
                objClone[key] = that.deepCopyTwo(obj[key]);
            } else {
                //如果不是，简单复制
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
  },
});
