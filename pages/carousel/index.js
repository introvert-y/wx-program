// const { config } = require('../../framework/index.js');
const record = [
  {
    id: '1ce98510170111ea84726c92bf621f6e',
    workerId: '657c98b889a211e882c6246e96766f00',
    workerName: '尹清波',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '木工(土建)',
    clockTime: '1575510413',
    imgUrl: 'https://txcdn2.emodor.com/1/447641/2019120509463530698.jpg',
    headImg: 'http://cdn.emodor.com/447641/3/2019071815530825815',
    status: '01',
    lateOrEarlyTime: '2813',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '409a72f316fd11ea84726c92bf621f6e',
    workerId: '799f8f2d897311e882c6246e96766f00',
    workerName: '罗晓育',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '涂裱工',
    clockTime: '1575508755',
    imgUrl: 'https://txcdn2.emodor.com/1/111987/2019120509185330672.jpg',
    headImg: 'http://cdn.emodor.com/2018072419034431',
    status: '01',
    lateOrEarlyTime: '1155',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '02073e8216fc11ea84726c92bf621f6e',
    workerId: 'd2a4e3aad29f11e984726c92bf621f6e',
    workerName: '吴昊初',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '水电工(装饰)',
    clockTime: '1575508221',
    imgUrl: 'https://txcdn2.emodor.com/1/323714/2019120509100030662.jpg',
    headImg: 'http://cdn.emodor.com/323714/3/2019101415034639915',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: 'ccafafaf16fb11ea84726c92bf621f6e',
    workerId: '0ab0d0ec970611e984726c92bf621f6e',
    workerName: '吴锡昌',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '钻孔工（木工）',
    clockTime: '1575508131',
    imgUrl: 'https://txcdn2.emodor.com/1/175684/2019120509084875888.jpg',
    headImg: 'http://cdn.emodor.com/175684/3/20190625130635102377',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '4a5c9dbd16fb11ea84726c92bf621f6e',
    workerId: '213f5e1b8d8411e984726c92bf621f6e',
    workerName: '曹楚莹',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '钢筋工',
    clockTime: '1575507912',
    imgUrl: 'https://txcdn2.emodor.com/1/468388/2019120509045030650.jpg',
    headImg: 'http://cdn.emodor.com/468388/3/2019092914284952223',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '46d8df3416fb11ea84726c92bf621f6e',
    workerId: '7ebebf66f58011e882c6246e96766f00',
    workerName: '孔祥梧',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '公司管理员',
    clockTime: '1575507906',
    imgUrl: 'https://txcdn2.emodor.com/1/215445/2019120509050175884.jpg',
    headImg: 'http://cdn.emodor.com/215445/3/20190926093043142878',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '3477307016fb11ea84726c92bf621f6e',
    workerId: 'b74db271d5d111e882c6246e96766f00',
    workerName: '林欣泽',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '贴砖工(装饰)',
    clockTime: '1575507876',
    imgUrl: 'https://txcdn2.emodor.com/1/174260/2019120509041630642.jpg',
    headImg: 'http://cdn.emodor.com/201811232003587',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
  {
    id: '10170b5c16fb11ea84726c92bf621f6e',
    workerId: 'c267b45e916511e984726c92bf621f6e',
    workerName: '唐志豪',
    projectName: '墨斗科技-考勤',
    groupName: '刘骞的班组',
    categoryName: '装饰木工',
    clockTime: '1575507815',
    imgUrl: 'https://txcdn2.emodor.com/1/137930/2019120509031330636.jpg',
    headImg: 'https://txcdn2.emodor.com/3/137930/2019120509034875878.jpg',
    status: '00',
    lateOrEarlyTime: '0',
    clock_type: '00',
    is_ot: '00',
  },
];

Page({
  data: {
    record,
    length: record.length,
    indicatorDots: false, // 是否显示面板指示点
    vertical: false, // 滑动方向是否为纵向
    autoplay: true,
    interval: 1000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    circular: true, // 平滑衔接
    skip: true, // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
    // previousMargin: '70px',
    // nextMargin: '70px',
    currentSwiperIndex: 2,
    number: 4,
  },
  // onShareAppMessage() {
  //   return config.shareData;
  // },
  swiperBindchange(e) {
    const { current } = e.detail;
    const { length } = this.data;
    let index = 0;
    if (current === length - 2) {
      index = 0;
    } else if (current === length - 1) {
      index = 1;
    } else {
      index = e.detail.current + 2;
    }
    this.setData({
      currentSwiperIndex: index,
    });
  },
});
