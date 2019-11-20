const config = {
  openMP: {
    envVersion: 'release', // release正式版 trial体验版 develop开发版
  },
};
const sysInfo = wx.getSystemInfoSync();

/**
 * 数字补全两位
 */
function fix2(n) {
  return n > 9 ? `${n}` : (`0${n}`);
}

/**
 * 微信官方提供的sdk版本比较方法
 * 有bug直接怼微信
 * https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000ea80cd78de80e9946942cb51401
 */
function compareVersion(v1, v2) {
  const v1Arr = v1.split('.');
  const v2Arr = v2.split('.');
  const len = Math.max(v1Arr.length, v2Arr.length);

  while (v1Arr.length < len) {
    v1Arr.push('0');
  }
  while (v2Arr.length < len) {
    v2Arr.push('0');
  }

  for (let i = 0; i < len; i += 1) {
    const num1 = parseInt(v1Arr[i], 10);
    const num2 = parseInt(v2Arr[i], 10);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

/**
 * 授权
 */
function author(type) {
  return new Promise((res, rej) => {
    wx.getSetting({
      success(r1) {
        if (!r1.authSetting[type]) {
          wx.authorize({
            scope: type,
            success(r2) {
              res(r2);
            },
            fail(err) {
              rej(err);
            },
          });
        } else {
          res(r1);
        }
      },
      fail(err) {
        rej(err);
      },
    });
  });
}

/**
 * 用户名字母排序
 */
function nameSortByLetter(arr) {
  const letters = '*ABCDEFGHJKLMNOPQRSTWXYZ'.split('');
  const zh = '阿八嚓哒妸发旮哈讥咔垃麻拏噢妑七呥扨它穵夕丫帀'.split('');
  const res = {};

  arr.map((item) => {
    const name = item.name || item.userName || item.nikeName;
    let letter = '';

    if (/^[a-zA-Z]/.test(name)) {
      // 英文
      letter = name.substr(0, 1).toUpperCase();
    } else if (/^[\u4e00-\u9fa5]/.test(name)) {
      // 中文
      letter = letters.find((lt, i) => (!zh[i - 1] || zh[i - 1].localeCompare(name, 'zh') <= 0) && name.localeCompare(zh[i], 'zh') === -1) || '#';
    } else {
      // 其他
      letter = '#';
    }

    if (!res[letter]) {
      res[letter] = [];
    }

    res[letter].push(item);
    return item;
  });

  return Object.keys(res).map((letter) => ({
    letter,
    data: res[letter],
  })).sort((a, b) => {
    const rA = a.letter === '#';
    const rB = b.letter === '#';
    if (rA && rB) {
      return 0;
    }
    if (!rA && !rB) {
      return a.letter > b.letter;
    }
    if (!rA) {
      return -1;
    }
    return 1;
  });
}

/**
 * 微信弹窗
 * @param {object} option
 */
function showModal(option) {
  const opt = {
    cancelColor: '#212732',
    confirmColor: '#377fee',
  };
  return wx.showModal.call(wx, { ...option, ...opt });
}

/**
 * 自动setData
 * @param {event} e 事件对象
 */
function autoSetData(e) {
  const { info } = e.currentTarget.dataset;
  const { value } = e.detail;
  const data = {};
  data[info] = value;
  this.setData(data);
}

/**
 * 相机权限检查
 */
function checkCameraAuth() {
  return new Promise((res, rej) => {
    wx.getSetting({
      success(r1) {
        if (!r1.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success: res,
            fail() {
              rej();
              showModal({
                title: '权限开启',
                content: '该功能需要使用拍照功能，请开启摄像头授权。',
                confirmText: '去开启',
                success(r2) {
                  if (r2.confirm) {
                    wx.openSetting();
                  }
                },
              });
            },
          });
        } else {
          res();
        }
      },
      fail: rej,
    });
  });
}

/**
 * 位置权限检查
 */
function checkLocationAuth() {
  return new Promise((res, rej) => {
    wx.getSetting({
      success(r1) {
        if (!r1.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success: res,
            fail() {
              rej();
              showModal({
                title: '权限开启',
                content: '该功能需要使用地理位置功能，请开启授权。',
                confirmText: '去开启',
                success(r2) {
                  if (r2.confirm) {
                    wx.openSetting();
                  }
                },
              });
            },
          });
        } else {
          res();
        }
      },
      fail: rej,
    });
  });
}

/**
 * 小程序跳转
 * @param {event} e 事件
 */
function openMP(e) {
  const { info } = e.currentTarget.dataset;
  const { envVersion } = config.openMP;
  if (!info.envVersion) {
    info.envVersion = envVersion;
  }
  wx.navigateToMiniProgram(info);
}

/**
 * 获取首字母
 */
function getZHLetter(str) {
  const letters = '*ABCDEFGHJKLMNOPQRSTWXYZ'.split('');
  const zh = '阿八嚓哒妸发旮哈讥咔垃麻拏噢妑七呥扨它穵夕丫帀'.split('');
  let letter = '';

  if (/^[a-zA-Z]/.test(str)) {
    // 英文
    letter = str.substr(0, 1).toUpperCase();
  } else if (/^[\u4e00-\u9fa5]/.test(str)) {
    // 中文
    letter = letters.find((lt, i) => (!zh[i - 1] || zh[i - 1].localeCompare(str, 'zh') <= 0) && str.localeCompare(zh[i], 'zh') === -1) || '#';
  } else {
    // 其他
    letter = '#';
  }

  return letter;
}

/**
 * 由于wx.getImageInfo在读取远程图片的时候有bug（抛异常）
 * 所以对这个功能重新封装
 * 先使用wx.downloadFile下载为本地临时文件
 * 再使用wx.getImageInfo读取临时文件信息
 */
function getImageInfo(obj) {
  return new Promise((res, rej) => {
    wx.downloadFile({
      url: obj.src,
      success(r1) {
        wx.getImageInfo({
          src: r1.tempFilePath,
          success: res,
          fail: rej,
        });
      },
      fail: rej,
    });
  });
}

/**
 * px转rpx
 * @param {px} px
 */
function px2rpx(px) {
  return 750 * (px / sysInfo.windowWidth);
}

module.exports = {
  config,
  fix2,
  compareVersion,
  author,
  nameSortByLetter,
  showModal,
  autoSetData,
  checkCameraAuth,
  checkLocationAuth,
  openMP,
  getZHLetter,
  getImageInfo,
  px2rpx,
};
