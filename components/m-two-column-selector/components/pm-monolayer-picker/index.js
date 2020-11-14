Component({
  properties: {
    range: {
      type: Array,
      value: [],
    },
    value: {
      type: Number,
      value: -1,
    },
  },
  data: {
    options: [],
  },
  methods: {
    /**
     * 选择
     */
    pick(e) {
      const { info } = e.currentTarget.dataset;
      const { range } = this.data;
      this.triggerEvent('change', {
        value: info,
        item: range[info],
      });
    },
  },
});
