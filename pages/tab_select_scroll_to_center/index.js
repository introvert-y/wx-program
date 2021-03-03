const { config } = require('../../framework/index.js');

const styleMap = {
  line: '00',
  backgroundColor: '01',
};
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
    offsetLeft: 0,
    crtStyle: styleMap.line,
    styleMap,
  },
  onShow() {
    // 获取当前设备的宽度
    this.setData({
      deviceWidth: wx.getSystemInfoSync().windowWidth,
    });
    this.onMove({
      currentTarget: {
        dataset: {
          index: 0,
        },
      },
    });
  },
  onShareAppMessage() {
    return config.shareData;
  },
  switchStyle(e) {
    const { info } = e.currentTarget.dataset;
    this.setData({
      crtStyle: info,
    });
  },
  onMove(e) {
    console.log('e.currentTarget', e.currentTarget);
    const { index } = e.currentTarget.dataset;
    // 创建节点
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;

    // 获取当前点击元素的宽度
    query.select('#item_' + index).boundingClientRect(function (rect) {
      const clientWidth = rect.width;
      console.log('e.currentTarget.offsetLeft', rect);
      that.setData({
        // 设置选中元素居中显示
        scrollLeft: e.currentTarget.offsetLeft + (clientWidth / 2 - that.data.deviceWidth / 2),
        bottomLineWidth: clientWidth,
        crtTab: index,
        offsetLeft: e.currentTarget.offsetLeft,
      })
    }).exec();
  },
});
