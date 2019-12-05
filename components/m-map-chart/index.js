const echarts = require('../../utils/ec-canvas/echarts');
const chinaMap = require('./china');

const frontMap = {
  type: 'map',
  mapType: 'china',
  map: 'china',
  label: {
    emphasis: {
      show: false,
    },
  },
  roam: false,
  itemStyle: {
    normal: {
      areaColor: '#091a5c',
      borderColor: '#17398e',
      borderWidth: 1,
    },
    emphasis: {
      areaColor: '#2a333d',
    },
  },
  tooltip: {
    show: false,
  },
  data: [{ name: '湖南省' }],
};

const convertData = (data, map) => {
  const res = [];
  for (let i = 0; i < data.length; i += 1) {
    const dataItem = data[i];
    const fromCoord = map[dataItem[0].name];
    const toCoord = map[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
      });
    }
  }
  return res;
};
let canvasId = 0;

/**
 * 获取id
 */
function getCanvasId() {
  canvasId += 1;
  return `map-chart_${canvasId}`;
}

function setFirstOption(inst, opt = {}) {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    geo: {
      map: 'china',
      mapType: 'china',
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: false,
      itemStyle: {
        normal: {
          shadowColor: 'rgba(31, 205, 255, 0.8)',
          shadowBlur: 30,
        },
      },
    },
    series: [frontMap],
  };

  console.log(option);
  inst.setOption(option, opt);
}
function updateChart(el) {
  const location = {
    id: null,
    province: '广东省',
    city: '广州市',
    county: '番禺区',
    longitude: 113.41239161249568,
    latitude: 23.067357458890267,
  };
  const geoCoordMap = {
    [location.province]: [location.longitude, location.latitude],
  };

  const GZData = [];

  const list = [
    {
      id: null,
      province: '广东省',
      city: '广州市',
      county: '番禺区',
      longitude: 113.3842,
      latitude: 22.9377,
      projectCounts: 5,
      workerCounts: 19,
    },
    {
      id: null,
      province: '湖南省',
      city: '邵阳市',
      county: '隆回县',
      longitude: 111.0086,
      latitude: 27.1158,
      projectCounts: 1,
      workerCounts: 8,
    },
    {
      id: null,
      province: '北京市',
      city: '北京市',
      county: '西城区',
      longitude: 116.3978,
      latitude: 39.9037,
      projectCounts: 1,
      workerCounts: 0,
    },
  ];

  list.sort((a, b) => b.workerCounts - a.workerCounts);
  const maxWorkerCounts = list.length ? list[0].workerCounts : 0;
  const minWorkerCounts = list.length ? list[list.length - 1].workerCounts : 0;

  list.map((p) => {
    geoCoordMap[p.province] = [p.longitude, p.latitude];
    GZData.push([
      { name: location.province },
      { name: p.province, value: p.workerCounts },
    ]);
    return p;
  });
  [[location.province, GZData]].forEach((item) => {
    console.log('item', item, item[1]);
  });
  const series = [];
  [[location.province, GZData]].forEach((item) => {
    const tail = {
      // name: `${item[0]}`,
      type: 'lines',
      // zlevel: 1,
      effect: {
        animation: false,
        show: true,
        period: 3,
        trailLength: 0.6,
        color: '#fff',
        symbolSize: 3,
      },
      lineStyle: {
        normal: {
          color: '#fff',
          width: 0,
          curveness: 0.2,
        },
      },
      data: convertData(item[1], geoCoordMap),
    };
    const dot1 = {
      // name: `${item[0]}`,
      type: 'lines',
      // zlevel: 2,
      effect: {
        animation: false,
        show: true,
        period: 3,
        trailLength: 0,
        symbol: 'circle',
        symbolSize: 5,
        color: '#3cffcb',
      },
      lineStyle: {
        normal: {
          color: '#fff',
          width: 2,
          opacity: 0.6,
          curveness: 0.2,
        },
      },
      data: convertData(item[1], geoCoordMap),
    };
    const city = {
      // name: `${item[0]}`,
      type: 'effectScatter',
      coordinateSystem: 'geo',
      // zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      symbolSize(dot) {
        const val = dot[2];
        if (minWorkerCounts === maxWorkerCounts) {
          return 15;
        }
        return (
          ((val - minWorkerCounts) / (maxWorkerCounts - minWorkerCounts)) * 5
          + 10
        );
      },
      itemStyle: {
        normal: {
          color: '#50febf',
        },
      },
      data: item[1].map((dataItem, idx) => ({
        name: dataItem[1].name,
        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
        tooltip: {
          formatter: `${dataItem[1].name}：${list[idx].projectCounts}个`,
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
        },
      })),
    };
    // series.push(frontMap);
    series.push(frontMap, city, dot1, tail);
    console.log('series', series);
  });
  el.setOption({
    series,
  });
}

Component({
  data: {
    canvasId: getCanvasId(),
    ec: {
      lazyLoad: true,
    },
  },
  ready() {
    this.ecComponent = this.selectComponent(`#${this.data.canvasId}`);
    this.initChart().then((chart) => {
      setFirstOption(chart);
    });
    const that = this;
    // setTimeout(() => {
    //   updateChart(that.myChart);
    // }, 3000);
  },
  detached() {
    if (!this.myChart) {
      return;
    }
    try {
      this.myChart.dispose();
    } catch (e) {
      // 这里会报错，等待官方修复这个bug
    }
  },
  methods: {
    /**
     * 初始化图表
     */
    initChart() {
      const that = this;
      return new Promise((res) => {
        that.ecComponent.init((canvas, width, height) => {
          // 获取组件的 canvas、width、height 后的回调函数
          // 在这里初始化图表
          const chart = echarts.init(canvas, null, {
            width,
            height,
          });
          canvas.setChart(chart);
          echarts.registerMap('china', chinaMap);
          // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
          that.myChart = chart;
          res(chart);

          // 注意这里一定要返回 chart 实例，否则会影响事件处理等
          return chart;
        });
      });
    },
  },
});
