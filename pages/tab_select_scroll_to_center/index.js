const { config } = require('../../framework/index.js');

Page({
  data: {
    tabmenu:[
      {
      name: 'Html',
      active: true
    },
    {
      name: 'CSS',
      active: false
    },
    {
      name: 'Javascript',
      active: false
    },
    {
      name: 'Es6',
      active: false
    },
    {
      name: 'Vue1111',
      active: false
    },
    {
      name: 'Vue跑步',
      active: false
    },
    {
      name: 'Vue游泳',
      active: false
    },
    {
      name: 'Vue爬山',
      active: false
    },
    {
      name: 'Vue买房',
      active: false
    },
    {
      name: 'Vue3333',
      active: false
    }
  ],
    deviceWidth: 0,
    scrollLeft: 0,
  },
  onShow() {
    // 获取当前设备的宽度
    this.setData({
      deviceWidth: wx.getSystemInfoSync().windowWidth,
    });
  },
  onShareAppMessage() {
    return config.shareData;
  },
  onMove(e) {
    // 创建节点
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    var width = 0
    // 获取当前点击元素的宽度
    query.select('#item_' + e.currentTarget.dataset.index).boundingClientRect(function (rect) {
      width = rect.width;
      // 激活当前选中项
      that.data.tabmenu.forEach(function (element, index) {
        element.active = false
        if (e.currentTarget.dataset.index == index) {
          element.active = true
        }
      })
      console.log('e.currentTarget.offsetLeft', e.currentTarget.offsetLeft, width / 2);
      that.setData({
        tabmenu: that.data.tabmenu,
        // 设置选中元素居中显示
        scrollLeft: e.currentTarget.offsetLeft + (width / 2 - that.data.deviceWidth / 2)
      })
    }).exec();
  },
});
