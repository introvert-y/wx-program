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
// function setOption(chart) {
//   const option = {
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [120, 200, 150, 80, 70, 110, 130],
//         type: 'bar',
//       },
//     ],
//   };
//   chart.setOption(option);
// }

function percent(n, toFixed) {
  const fixed = toFixed || 0;
  if (!n) {
    return 0;
  }
  const p = n * 100;
  return p.toFixed(fixed) - 0;
}

function setOption(inst) {
  // if (!inst) {
  //   return;
  // }
  const barLimit = 10;
  const list = [
    {
      id: '0b2f954dd73e11e882c6246e96766f00',
      projectId: null,
      projectName: null,
      groupName: '刘骞的班组刘骞的班组',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 12,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 11,
      lateEarlyCounts: 1,
      present: 16,
    },
    {
      id: 'afa94465633311e9ba1c6c92bf628924',
      projectId: null,
      projectName: null,
      groupName: '未激活测试',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 0,
    },
    {
      id: '5bfb1a6875ae11e9ba1c6c92bf628924',
      projectId: null,
      projectName: null,
      groupName: '老五六',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 4,
    },
    {
      id: '7ea9baaf8d8511e984726c92bf621f6e',
      projectId: null,
      projectName: null,
      groupName: '才哥班组',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 0,
    },
    {
      id: '4398cae28d8411e984726c92bf621f6e',
      projectId: null,
      projectName: null,
      groupName: '楚莹班组',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 1,
    },
    {
      id: 'be62cc2086a611e984726c92bf621f6e',
      projectId: null,
      projectName: null,
      groupName: '测试',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 1,
    },
    {
      id: '7c39c027adb911e984726c92bf621f6e',
      projectId: null,
      projectName: null,
      groupName: '测试1',
      groupId: null,
      workerId: null,
      workerName: null,
      workerImage: null,
      workers: 0,
      attendances: 0,
      absent: 0,
      lates: 0,
      exception: 0,
      regular: 0,
      lateEarlyCounts: 0,
      present: 0,
    },
  ];
  const option = {
    baseOption: {
      legend: {
        data: [
          {
            name: '正常',
            icon: 'roundRect',
          },
          {
            name: '迟到早退',
            icon: 'roundRect',
          },
        ],
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 81,
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        bottom: 0,
      },
      textStyle: {
        color: '#fff',
      },
      grid: {
        left: '3%',
        right: 100,
        bottom: '13%',
        top: 0,
        containLabel: true,
      },
      dataZoom: [
        {
          type: 'slider',
          show: false,
          yAxisIndex: [0],
          filterMode: 'filter',
          zoomLock: true,
          startValue: 0,
          endValue: barLimit - 1,
          right: 0,
          textStyle: {
            color: '#fff',
          },
          handleIcon: 'none',
          labelFormatter: '',
          width: 10,
          fillerColor: '#354f77',
          borderColor: 'rgba(0, 0, 0, 0)',
        },
      ],
      xAxis: {
        type: 'value',
        show: false,
        max: 100,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        type: 'category',
        data: list.map((p) => (p.groupName.length > 7
          ? `${p.groupName.substr(0, 7)}…`
          : `${p.groupName}`)),
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: 'green',
        },
        inverse: true,
        max: barLimit - 1,
      },
      barWidth: 7,
      series: [
        {
          type: 'bar',
          data: list.map(() => 100),
          color: 'rgba(255, 255, 255, .2)',
          barGap: '-100%',
          label: {
            show: true,
            position: 'right',
            formatter(params) {
              const { attendances, present } = list[params.dataIndex];
              return `${
                attendances > present
                  ? 100
                  : percent(attendances / (present || 1))
              }% ${attendances}人`;
            },
            align: 'right',
            distance: 100,
            padding: [0, 20, 0, 0],
          },
        },
        {
          name: '正常',
          type: 'bar',
          stack: true,
          data: list.map((p) => {
            const { regular, attendances, present } = p;
            return attendances > present
              ? (regular / attendances) * 100
              : (regular / (present || 1)) * 100;
          }),
          color: '#007df9',
        },
        {
          name: '迟到早退',
          type: 'bar',
          stack: true,
          data: list.map((p) => {
            const { lateEarlyCounts, attendances, present } = p;
            return attendances > present
              ? (lateEarlyCounts / attendances) * 100
              : (lateEarlyCounts / (present || 1)) * 100;
          }),
          color: '#fdd966',
        },
      ],
    },

    media: [
      // 这里定义了 media query 的逐条规则。
      {
        query: {
          maxWidth: 375,
        }, // 这里写规则。
        option: {
          // 这里写此规则满足下的option。
          legend: {
            textStyle: {
              color: 'blue',
              fontSize: 14,
            },
          },
          barWidth: 7,
          series: [
            {
              label: {
                color: 'blue',
                fontSize: 14,
              },
            },
            {
              label: {
                color: 'blue',
                fontSize: 14,
              },
            },
          ],
        },
      },
      {
        query: {
          minWidth: 400,
        }, // 这里写规则。
        option: {
          // 这里写此规则满足下的option。
          legend: {
            textStyle: {
              color: 'red',
              fontSize: 22,
            },
            itemHeight: 14,
            itemWidth: 20,
          },
          barWidth: 16,
          yAxis: {
            axisLabel: {
              fontSize: 18,
            },
          },
          series: [
            {
              label: {
                color: 'red',
                fontSize: 20,
              },
            },
            {
              label: {
                color: 'red',
                fontSize: 20,
              },
            },
          ],
        },
      },
    ],
  };
  inst.setOption(option);
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
