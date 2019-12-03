const echarts = require('../../utils/ec-canvas/echarts');

let canvasId = 0;

/**
 * 获取id
 */
function getCanvasId() {
  canvasId += 1;
  return `bar-chart_${canvasId}`;
}
/**
 * 设置图表
 */
function setOption(chart) {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };
  chart.setOption(option);
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
    this.initChart().then((chart) => setOption(chart));
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
          console.log('1111', width, height);
          const chart = echarts.init(canvas, null, {
            width,
            height,
          });

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
