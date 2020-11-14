Component({
  properties: {
    itemList: {
      type: Array,
      value: [],
    },
    bodyStyle: {
      type: String,
      value: '',
    },
  },
  methods: {
    /**
     * 背景点击
     */
    onBgTap() {
      this.cancel();
    },
    /**
     * 点击
     */
    onItemTap(e) {
      const { info } = e.currentTarget.dataset;
      const { itemList } = this.data;
      this.triggerEvent('success', {
        tapIndex: info,
        item: itemList[info],
      });
    },
    /**
     * 取消
     */
    cancel() {
      this.triggerEvent('cancel');
    },
  },
});
