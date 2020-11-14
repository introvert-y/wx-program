Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    placement: {
      type: String,
      value: 'right',
    },
    containerStyle: {
      type: String,
      value: '',
    },
    boxStyle: {
      type: String,
      value: '',
    },
    titleStyle: {
      type: String,
      value: '',
    },
    hideCloseBtn: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    /**
     * 背景点击
     */
    onBgTap() {
      this.close();
    },
    /**
     * 阻止冒泡
     */
    onBoxTap() {
      //
    },
    /**
     * 阻止滚动
     */
    onBgTouchMove() {
      //
    },
    close() {
      this.triggerEvent('close');
    },
  },
});
