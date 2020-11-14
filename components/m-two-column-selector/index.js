Component({
  properties: {
    firstTypeRange: {
      type: Array,
      value: [],
    },
    secondTypeRange: {
      type: Array,
      value: [],
    },
    value: {
      type: Array,
      value: [0, 0],
    },
  },
  attached() {
    const { firstTypeRange, secondTypeRange, value } = this.data;
    const [firstValue, secondValue] = value;
    const firstTypePicker = {
      range: firstTypeRange,
      value: firstValue,
      label: firstTypeRange[firstValue].label,
    };
    const secondTypePicker = {
      range: secondTypeRange,
      value: secondValue,
      label: secondTypeRange[secondValue].label || '请选择',
    };
    this.setData({
      firstTypePicker,
      secondTypePicker,
    });
  },
  data: {
    firstTypePicker: {},
    secondTypePicker: {},
    picker: [],
    crtPicker: '',
  },
  methods: {
    /**
     * 切换选择器
     */
    togglePicker(e) {
      const { info } = e.currentTarget.dataset;
      const { crtPicker } = this.data;
      let crt = '';
      if (crtPicker !== info) {
        crt = info;
      }
      this.setData({
        crtPicker: crt,
      });
    },
    /**
     * 关闭选择器
     */
    closePicker() {
      this.setData({
        crtPicker: '',
      });
    },
    /* 阻止滚动穿透 */
    preventTouchMove() {
    },
    /**
     * 第一列类型选择
     */
    onFirstColumnTypeChange(e) {
      const that = this;
      const { value, item } = e.detail;
      this.setData({
        'firstTypePicker.value': value,
        'firstTypePicker.label': item.label,
      }, () => {
        that.change('firstTypePicker', item);
      });
    },
    /**
     * 第一列类型选择
     */
    onSecondColumnTypeChange(e) {
      const that = this;
      const { value, item } = e.detail;
      this.setData({
        'secondTypePicker.value': value,
        'secondTypePicker.label': item.label,
      }, () => {
        that.change('secondTypePicker', item);
      });
    },
    /**
     * 触发值变化
     */
    change(type, res) {
      const that = this;
      const { firstTypePicker, secondTypePicker } = this.data;
      setTimeout(() => {
        that.triggerEvent('change', {
          type,
          value: [firstTypePicker.value, secondTypePicker.value],
          item: res,
        });
        that.closePicker();
      }, 0);
    },
  },
});
