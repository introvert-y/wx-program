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
    bottomLineWidth: 0,
    crtTab: 0,
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
    console.log('e.currentTarget', e.currentTarget);
    const { index } = e.currentTarget.dataset;
    // 创建节点
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;

    var width = 0

    // 获取当前点击元素的宽度
    query.select('#item_' + index).boundingClientRect(function (rect) {
      const clientWidth = rect.width;
      console.log('e.currentTarget.offsetLeft', rect);
      that.setData({
        // 设置选中元素居中显示
        scrollLeft: e.currentTarget.offsetLeft + (clientWidth / 2 - that.data.deviceWidth / 2),
        bottomLineWidth: clientWidth,
        crtTab: index,
      })
    }).exec();
  },
});
