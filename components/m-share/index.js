Component({
  ready() {
    this.onGetData();
  },
  methods: {
    onModalCancel(e) {
      this.onCancle(e);
    },
    onCancle(e) {
      this.triggerEvent('cancel', e);
    },
    /**
     * 分享数据
     */
    onGetData() {
      this.triggerEvent('data', this.genShareData());
    },
    /**
     * 生成分享数据
     */
    genShareData() {
      return {
        title: 'xc的测试公司 邀请你填写每日健康统计',
        path: '/pages/home/index',
        imageUrl: '../../img/share/antiepidemic-pic-share@3x.png',
      };
    },
    /**
     * 下一步
     */
    next(e) {
      this.triggerEvent('next', e);
    },
  },
});
