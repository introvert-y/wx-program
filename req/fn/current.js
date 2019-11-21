module.exports = {
  install(R) {
    /**
     * 获取当前信息
     */
    function getInfo(opt = {}) {
      return new Promise((res, rej) => {
        if (opt.force) {
          R.clearCache('user.getMyInfo');
        }
        R.cachify('user.getMyInfo')()
          .then((r1) => {
            res(r1);
          })
          .catch(rej);
      });
    }

    R.current = {
      // 更新
      update() {
        R.clearCache('user.getMyInfo');
      },
      getInfo,
    };
  },
};
