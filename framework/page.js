const { decode } = require('../router/data.js');

const page = Page;

/**
 * 观察小程序的页面参数，记录每次页面跳转携带的参数
 */
module.exports = (options = {}) => {
  const { onLoad } = options;
  const patchOptions = {
    onLoad(...res) {
      const opts = res[0];
      const { encodedData } = opts;
      const optData = encodedData ? decode(encodedData) : {};
      this.$opts = opts;
      this.$optData = optData;
      console.log('Page $optData:', optData);
      // console.log('Page $opts:', opts);
      /**
       * 拦截后再暴露出去，缺少这步则会拦截所有的onLoad方法
       */
      if (onLoad) {
        onLoad.apply(this, res);
      }
    },
  };
  const newOptions = { ...options, ...patchOptions };
  return page(newOptions);
};
