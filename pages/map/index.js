const { config } = require('../../framework/index.js');

const dotList = [
  {
    id: 0,
    latitude: 22.931219,
    longitude: 113.768192,
    label: {
      content: '森林公园',
      anchorX: 10,
      anchorY: -37,
      bgColor: '#ffffff',
      padding: 2,
      borderRadius: 4,
    },
    // zIndex: -10,
    iconPath: '../../img/map/location.png',
  },
  {
    id: 1,
    latitude: 23.086682,
    longitude: 112.970695,
    label: {
      content: '南海湿地公园',
      anchorX: 10,
      anchorY: -37,
      bgColor: '#ffffff',
      padding: 2,
      borderRadius: 4,
    },
    // zIndex: -10,
    iconPath: '../../img/map/location.png',
  },
  {
    id: 2,
    latitude: 23.15146,
    longitude: 113.352323,
    label: {
      content: '国立中山大学',
      anchorX: 10,
      anchorY: -37,
      bgColor: '#ffffff',
      padding: 2,
      borderRadius: 4,
    },
    // zIndex: -10,
    iconPath: '../../img/map/location.png',
  },
];

const collections = [
  {
    id: 0,
    latitude: 22.9,
    longitude: 113.757808,
    label: {
      anchorX: -22,
      anchorY: -52,
      content: '26\n东莞市',
      color: '#FFB6C1',
      bgColor: '#ffffff',
      fontSize: 12,
      padding: 4,
      textAlign: 'center',
    },
    iconPath: '../../img/map/yuanxing.png',
    width: 60,
    height: 60,
    // zIndex: 100,
  },
  {
    id: 1,
    latitude: 23.00336,
    longitude: 113.127125,
    label: {
      anchorX: 20,
      anchorY: -52,
      content: '10\n佛山市',
      color: '#FFB6C1',
      // bgColor: 'transparent',
      fontSize: 12,
      padding: 4,
      textAlign: 'center',
    },
    iconPath: '../../img/map/yuanxing.png',
    width: 60,
    height: 60,
    // zIndex: 100,
  },
];

Page({
  data: {
    scale: 9,
    longitude: 113.32452,
    latitude: 23.099994,
    markers: [],
    currentScale: 9,
    isShow: true,
    currentMarker: {},
  },
  onLoad() {
    const that = this;
    this.setData({
      markers: that.deepCopy(dotList),
    });
  },
  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
  },
  getCenterLocation() {
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log(res.longitude);
        console.log(res.latitude);
      },
    });
  },
  moveToLocation() {
    this.mapCtx.moveToLocation({
      latitude: 22.931219,
      longitude: 113.768192,
    });
  },
  includePoints() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
        {
          latitude: 23.10229,
          longitude: 113.3345211,
        },
        {
          latitude: 23.00229,
          longitude: 113.3345211,
        },
      ],
    });
  },
  onShareAppMessage() {
    return config.shareData;
  },
  scaleChange(e) {
    const that = this;
    const data = {};
    // const { currentMarker } = this.data;
    if (e.causedBy === 'scale') {
      this.mapCtx.getScale({
        success(res) {
          console.log('当前的scale为：', res.scale);
          if (res.scale > 6 && res.scale <= 8) {
            // console.log('该聚合了');
            data.markers = that.deepCopy(collections);
            data.isShow = true;
            // data[`markers[${currentMarker.id}].label.bgColor`] = '#ffffff';
            // data[`markers[${currentMarker.id}].label.color`] = '#000000';
          } else if (res.scale > 8) {
            data.markers = that.deepCopy(dotList);
          } else {
            data.markers = [];
            data.isShow = true;
          }
          data.currentScale = res.scale;
          that.setData(data);
        },
      });
    }
  },
  clickLabel(e) {
    console.log('点击label', e);
    const that = this;
    const { currentScale, markers, currentMarker } = this.data;
    if (currentScale > 6 && currentScale <= 8) {
      that.mapCtx.moveToLocation({
        latitude: 22.931219,
        longitude: 113.768192,
      });
      this.setData({
        scale: 9,
        markers: [],
      });
      // e.detail.markerId
    } else if (currentScale >= 9 && currentMarker.id !== e.detail.markerId) {
      const data = {};
      markers.forEach((item, key) => {
        // console.log('item和key', item, key);
        data[`markers[${key}].label.bgColor`] = item.id !== e.detail.markerId ? '#ffffff' : '#4169E1';
        data[`markers[${key}].label.color`] = item.id !== e.detail.markerId ? '#000000' : '#ffffff';
      });
      data.isShow = false;
      data.currentMarker = markers[e.detail.markerId];
      // console.log('data', data);
      that.setData(data);
    }
  },
  clickMarker(e) {
    console.log('clickMarker', e);
  },
  clickAnyDot(e) {
    console.log('点击任何一个点', e);
  },
  deepCopy(o) {
    const that = this;
    if (o instanceof Array) {
      const n = [];
      for (let i = 0; i < o.length; i += 1) {
        n[i] = that.deepCopy(o[i]);
      }
      return n;
    }
    if (o instanceof Object) {
      const n = {};
      Object.keys(o).forEach((key) => {
        n[key] = that.deepCopy(o[key]);
      });
      return n;
    }
    return o;
  },
});
