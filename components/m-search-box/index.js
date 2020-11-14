Component({
  properties: {
    placeholder: {
      type: String,
      value: '',
    },
    fixed: {
      type: Boolean,
      value: true,
    },
    iconMarginLeft: {
      type: String,
      value: '190',
    },
    allwayNoChange: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    search: {
      init: true,
      initVal: '',
      val: '',
    },
  },
  methods: {
    /**
     * 搜索获得焦点
     */
    onSearchFocus() {
      if (this.data.allwayNoChange) {
        return;
      }
      this.setData({
        'search.init': false,
      });
    },
    /**
     * 搜索失去焦点
     */
    onSearchBlur() {
      if (this.data.search.val) {
        return;
      }
      this.setData({
        'search.init': true,
      });
    },
    /**
     * 搜索输入
     */
    onSearchInput(e) {
      const that = this;
      const { value } = e.detail;
      this.setData({
        'search.val': value,
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        that.triggerEvent('change', {
          value,
        });
      }, 200);
    },
  },
});
