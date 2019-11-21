const faqList = [
  {
    id: 1,
    title: '如何加入',
    url: 'https://txcdn.emodor.com/h5/20180711/index.html',
    // url: 'https://mp.weixin.qq.com/s?__biz=MzUyODgzMTkyMA==&mid=100001063&idx=4&sn=08ac5981800be9949c6af5040a3d8197&scene=19#wechat_redirect',
  },
  {
    id: 2,
    title: '权限说明',
    url: 'https://mp.weixin.qq.com/s?__biz=MzUyODgzMTkyMA==&mid=100001063&idx=3&sn=2fc8b7b55b046996483d36ad2db82c78&scene=19#wechat_redirect',
  },
  {
    id: 3,
    title: '如何添加班组长',
    url: 'https://mp.weixin.qq.com/s?__biz=MzUyODgzMTkyMA==&mid=100001063&idx=2&sn=d8560e74c44d69cc9229b5f1b8623de6&scene=19#wechat_redirect',
  },
  {
    id: 4,
    title: '如何添加管理员',
    url: 'https://mp.weixin.qq.com/s?__biz=MzUyODgzMTkyMA==&mid=100001063&idx=1&sn=3070c97f36cb0cc7c8c324e64d7bfdaf&scene=19#wechat_redirect',
  },
  {
    id: 5,
    title: '产品功能介绍',
    url: 'https://txcdn.emodor.com/h5/20180711/index.html',
  },
  {
    id: 6,
    title: '新功能介绍',
    url: 'https://mp.weixin.qq.com/s/9pBKarwoE4roPf818vSPzQ',
  },
  {
    id: 7,
    title: '项目管理员说明',
    url: 'https://mp.weixin.qq.com/s/UXwP_DoajMKl0hOm5JDrUg',
  },
  {
    id: 8,
    title: '项目经理说明',
    url: 'https://mp.weixin.qq.com/s/-rJEISpFFf6uUbYIZGRa9g',
  },
  {
    id: 9,
    title: '考勤设备',
    url: 'https://mp.weixin.qq.com/s/s-J4pqiR-0rQJhYs0Py1Fw',
  },
  {
    id: 10,
    title: '实名认证协议',
    url: 'https://h5.emodor.com/service-landing/#/real_name',
  },
  {
    id: 11,
    title: '组织架构添加/加入说明',
    url: 'https://mp.weixin.qq.com/s/kgA56o2aNo5r_23HSwQOAg',
  },
  {
    id: 12,
    title: '如何录入黑名单',
    url: 'https://mp.weixin.qq.com/s/2tVNz7I_xS-_DEsNHczSXw',
  },
  {
    id: 13,
    title: '关于黑名单',
    url: 'https://mp.weixin.qq.com/s/movwnq5V6Z3oB16SN2SJcg',
  },
  {
    id: 14,
    title: '权限说明',
    url: 'https://mp.weixin.qq.com/s/-4gDGTR_1VYeraIj1Vb2Fg',
  },
  {
    id: 15,
    title: '测试跳转到百度',
    url: 'https://www.qq.com',
  },
];

const faqTable = {};

faqList.map((f) => {
  const { id, title, url } = f;
  faqTable[id] = {
    title,
    url,
    path: `/pages/webview/help/index?id=${id}`,
    route: {
      name: 'webview.help',
      query: {
        id,
      },
    },
  };

  return f;
});
module.exports = faqTable;
