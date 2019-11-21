let isShowModalComplete = true;

/**
 * 提炼错误信息
 * @param {any} err 错误信息
 * @return {string} errMsg
 */
function picker(err) {
  const msg = '程序好像出了点小问题，请与客服联系~';
  const res = typeof err === 'string' ? err : (err.msg || err.errMsg || (err.detail && err.detail.errMsg) || msg);
  if (err instanceof Error) {
    console.error(err);
  } else {
    console.error(res);
  }
  return res;
}

/**
 * 错误弹窗
 * @param {any} err 错误信息
 */
function show(err) {
  const msg = picker(err);

  if (!isShowModalComplete) {
    return;
  }
  isShowModalComplete = false;
  wx.showModal({
    showCancel: false,
    cancelColor: '#212732',
    confirmColor: '#377fee',
    confirmText: '我知道了',
    content: msg,
    complete() {
      isShowModalComplete = true;
    },
  });
}

module.exports = {
  install(R) {
    R.err = {
      picker,
      show,
    };
  },
};
