Component({
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [
      {
        iconPath: '../../img/map/location.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50,
        callout: {
          content: '是否删除该端点',
          display: 'BYCLICK',
          padding: 4,
        },
      },
      {
        iconPath: '../../img/map/location.png',
        id: 1,
        latitude: 25,
        longitude: 100,
        width: 50,
        height: 50,
        callout: {
          content: '是否删除该端点',
          display: 'BYCLICK',
          padding: 4,
        },
      },
      {
        iconPath: '../../img/map/location.png',
        id: 2,
        latitude: 30,
        longitude: 90,
        width: 50,
        height: 50,
        callout: {
          content: '是否删除该端点',
          display: 'BYCLICK',
          padding: 4,
        },
      },
    ],
    polyline: [
      {
        points: [],
        borderColor: '#FF0000',
        color: '#7cb5ec88',
        borderWidth: 4,
        width: 20,
      },
    ],
  },
  ready() {
    // this不能省略在自定义组件中,否则获取到的值不正确
    this.wxmap = wx.createMapContext('map', this);
    const { markers } = this.data;
    this.saveCurrentMarkers = [];
    this.setData({
      'polyline[0].points': markers.map((item) => ({
        latitude: item.latitude,
        longitude: item.longitude,
      })),
    });
  },
  methods: {
    setMarker(obj) {
      const templateObj = {
        iconPath: '../../img/map/location.png',
        latitude: 32,
        longitude: 80,
        width: 50,
        height: 50,
        callout: {
          content: '是否删除该端点',
          display: 'BYCLICK',
          padding: 4,
        },
      };
      return { ...templateObj, ...obj };
    },
    reset() {
      const list = this.saveCurrentMarkers.map((item) => ({
        latitude: item.latitude,
        longitude: item.longitude,
      }));
      console.log('reset', list, this.saveCurrentMarkers);

      this.setData({
        markers: this.saveCurrentMarkers,
        'polyline[0].points': list,
      });
    },
    markertap(e) {
      console.log('markertap', e.markerId);
    },
    callouttap(e) {
      // console.log('callouttap', e);
      const { markers, polyline } = this.data;
      if (markers.length <= 3) {
        return;
      }
      const selectItem = markers.find((item) => item.id === e.markerId);
      this.setData({
        markers: markers.filter((item) => item.id !== e.markerId),
        'polyline[0].points': polyline[0].points.filter((item) => item.latitude !== selectItem.latitude && item.longitude !== selectItem.longitude),
      });
    },
    click(e) {
      // console.log('点击', e);
      const that = this;
      const { markers, polyline } = this.data;
      const { latitude, longitude } = e.detail;
      const lastId = !markers.length ? 1 : markers[markers.length - 1].id + 1;

      const obj = {
        id: lastId,
        latitude,
        longitude,
      };
      const newObj = that.setMarker(obj);
      this.setData({
        markers: markers.concat([newObj]),
        'polyline[0].points': polyline[0].points.concat([{ latitude, longitude }]),
      });
    },
    clear() {
      this.saveCurrentMarkers = [];
      this.setData({
        markers: [],
        'polyline[0].points': [],
      });
    },
    clearAll() {
      this.saveCurrentMarkers = [];
      this.setData({
        markers: [],
        'polyline[0].points': [],
      });
    },
    regionchange(e) {
      const { markers } = this.data;
      console.log(e.type, e.causedBy, markers);
      this.wxmap.getScale({
        success(res) {
          console.log('当前缩放', res.scale);
        },
      });
    },
  },
});
