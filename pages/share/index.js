const { config } = require('../../framework/index.js');

Page({
  data: {
    inviteModal: {
      status: false,
    },
  },
  onLoad() {
    this.shareData = null;
  },
  onShareAppMessage() {
    return this.shareData || config.shareData;
  },
  toggleModal() {
    const { inviteModal } = this.data;
    this.setData({
      'inviteModal.status': !inviteModal.status,
    });
  },
  getShareData(e) {
    this.shareData = e.detail;
    console.log('获取到数据了', e);
  },
});
