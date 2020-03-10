let id = 0;

function getId() {
  id += id;
  return `my_id_${id}`;
}

Component({
  properties: {
    str: {
      type: String,
      value: '',
      observer(nV, oV) {
        console.log('获取到了str', nV, oV, this.data.keyWord);
        const that = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          if (that.data.keyWord && nV) {
            that.setData({
              list: that.getHilightStrArray(nV, that.data.keyWord),
            });
          }
        }, 100);
      },
    },
    keyWord: {
      type: String,
      value: '',
      observer(nV, oV) {
        console.log('获取到了keyWord', nV, oV, this.data.str);
        const that = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          if (that.data.keyWord && nV) {
            that.setData({
              list: that.getHilightStrArray(that.data.str, nV),
            });
          }
        }, 100);
      },
    },
  },
  data: {
    list: [],
  },
  ready() {
    // console.log('获取到了keyWord', this.data.str, this.data.keyWord);
    this.timer = 0;
    // this.setData({
    //   list: this.getHilightStrArray(this.data.str, this.data.keyWord),
    // });
  },
  methods: {
    // 返回一个使用key切割str后的数组，key仍在数组中
    getHilightStrArray(str, key) {
      const arr = str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
      arr.map(((item) => Object.assign(item, { id: getId() })));
      return arr;
    },
  },
});
