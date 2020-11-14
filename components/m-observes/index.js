Component({
  data: {
    num: 0,
    numberA: 0,
    numberB: 0,
  },
  observers: {
    'numberA, numberB': function (newA, newB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      const { numberA, numberB } = this;
      if (newA === numberA && newB === numberB) {
        return;
      }
      this.setData({
        num: newA + newB,
      });
    },
  },
  attached() {
    this.simulation();
  },
  methods: {
    simulation() {
      const that = this;
      setTimeout(() => {
        that.setData({
          numberA: 1,
          numberB: 2,
        });
      }, 1000);
    },
  },
});
