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
      },
    ],
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      color: '#FF0000',
      fillColor: '#7cb5ec88',
      radius: 400,
      strokeWidth: 2,
    }],
  },
  ready() {
    // this不能省略在自定义组件中,否则获取到的值不正确
    this.wxmap = wx.createMapContext('map', this);
    this.setCrlcle();
    this.timer = 0;
  },
  methods: {
    setCrlcle() {
      const that = this;
      this.wxmap.getCenterLocation({
        success(res) {
          // radius值为number，而且根据观察应该是1代表1m
          that.setData({
            'circles[0].radius': 100,
            'circles[0].color': '#FF0000',
            'circles[0].fillColor': '#7cb5ec88',
            'circles[0].strokeWidth': 2,
            'circles[0].longitude': res.longitude,
            'circles[0].latitude': res.latitude,
          });
        },
      });
    },
    regionchange(e) {
      const { circles } = this.data;
      if (e.causedBy === 'gesture') {
        return;
      }
      console.log(e.type, e.causedBy);
      const that = this;
      this.wxmap.getScale({
        success(res) {
          console.log('当前缩放', res.scale);
        },
      });
      if (e.type === 'begin' && circles.length && e.causedBy === 'drag') {
        that.setData({
          circles: [],
        });
      }
      if (e.type === 'end') {
        clearTimeout(that.timer);
        setTimeout(() => {
          that.setCrlcle();
        }, 100);
      }
    },
    markertap(e) {
      console.log(e.markerId);
      console.log(e);
    },
    click(e) {
      console.log('点击', e);
    },
  },
});
