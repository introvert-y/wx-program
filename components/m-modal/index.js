const { req } = require('../../framework/index.js');

Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    cancelText: {
      type: String,
      value: '取消',
    },
    cancelColor: {
      type: String,
      value: '#212732',
    },
    confirmText: {
      type: String,
      value: '确定',
    },
    confirmColor: {
      type: String,
      value: '#377fee',
    },
    confirmType: {
      type: String,
      value: '',
    },
    bgCancel: {
      type: Boolean,
      value: true,
    },
    moveTop: {
      type: String,
    },
    hideAction: {
      type: Boolean,
      value: false,
    },
    showCancel: {
      type: Boolean,
      value: true,
    },
    closeBtn: {
      type: Boolean,
      value: false,
    },
  },
  methods: {

    /**
     * 点击背景
     */
    onBackgroundTap(e) {
      if (this.data.bgCancel) {
        this.cancel(e);
      }
    },

    /**
     * 点击主窗口
     */
    onMainTap() {
      // do nothing...
    },

    /**
     * 取消
     */
    cancel(e) {
      this.triggerEvent('cancel', {
        from: e.currentTarget.dataset.info,
      });
    },

    /**
     * 确定
     */
    confirm() {
      this.triggerEvent('confirm');
    },

    /**
     * 用户信息授权
     */
    onGetUserInfo(e) {
      const that = this;
      const { dataset } = e.currentTarget;

      if (e.detail.encryptedData) {
        // 上传用户信息
        wx.showLoading({
          title: '正在提交',
          mask: true,
        });
        req.user.syncWXUserInfo(e.detail)
          .then((r1) => {
            wx.hideLoading();
            if (r1.code !== 0) {
              req.err.show(r1.msg);
              that.triggerEvent('getUserInfo', {
                status: 'fail',
                btn: dataset.btn,
                err: r1.msg,
              });
              return;
            }
            req.clearCache('user.getMyInfo');
            that.triggerEvent('getUserInfo', {
              status: 'succ',
              btn: dataset.btn,
            });
          })
          .catch((err) => {
            wx.hideLoading();
            req.err.show(err);
            that.triggerEvent('getUserInfo', {
              status: 'fail',
              btn: dataset.btn,
              err,
            });
          });
      } else {
        that.triggerEvent('getUserInfo', {
          status: 'reject',
          btn: dataset.btn,
          err: e.detail,
        });
      }
    },

    /**
     * 用户手机号码授权
     */
    onGetPhoneNumber(e) {
      const that = this;
      const { dataset } = e.currentTarget;

      if (e.detail.encryptedData) {
        // 上传用户信息
        wx.showLoading({
          title: '正在提交',
          mask: true,
        });
        req.user.syncWXPhone(e.detail)
          .then((r1) => {
            wx.hideLoading();
            if (r1.code !== 0) {
              req.err.show(r1.msg);
              that.triggerEvent('getphonenumber', {
                status: 'fail',
                btn: dataset.btn,
                err: r1.msg,
              });
              return;
            }
            req.clearCache('user.getMyInfo');
            that.triggerEvent('getphonenumber', {
              status: 'succ',
              btn: dataset.btn,
            });
          })
          .catch((err) => {
            wx.hideLoading();
            req.err.show(err);
            that.triggerEvent('getphonenumber', {
              status: 'fail',
              btn: dataset.btn,
              err,
            });
          });
      } else {
        that.triggerEvent('getphonenumber', {
          status: 'reject',
          btn: dataset.btn,
          err: e.detail,
        });
      }
    },
  },
});
