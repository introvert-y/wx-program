const { config } = require('../../framework/index.js');

Page({
  data: {
    longitude: 113.32452,
    latitude: 23.099994,
    markers: [
      {
        id: 0,
        latitude: 23.099994,
        longitude: 113.384,
        title: 'T.I.T 创意园',
        zIndex: 20,
        iconPath: '../../img/map/location.png',
      },
      {
        id: 1,
        latitude: 23.156181,
        longitude: 113.338,
        title: '11111',
        zIndex: 20,
        iconPath: '../../img/map/location.png',
      },
      {
        id: 2,
        latitude: 23.099994,
        longitude: 113.454,
        title: '2222',
        zIndex: 5,
        callout: {
          content: '测试测试',
          fontSize: 22,
          color: '#00ccff',
          borderRadius: 50,
          borderWidth: 5,
        },
        iconPath: '../../img/map/location.png',
      },
    ],
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
    this.mapCtx.moveToLocation();
  },
  translateMarker() {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end');
      },
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
});
