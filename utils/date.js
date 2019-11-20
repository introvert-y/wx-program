const utils = require('../utils/index.js');

const timeZone = 8; // 目标时区时间，东八区
const timeZoneOffset = new Date().getTimezoneOffset() * 60 * 1000 + timeZone * 60 * 60 * 1000; // 本地时间和格林威治的时间差，单位为分钟

/**
 * 时间戳转东八区
 * @param timestamp 时间戳
 */
function getTimestamp8(timestamp) {
  return timestamp + timeZoneOffset;
}

/**
 * 日期对象转东八区
 * @param timestamp 时间戳
 */
function getDate8(timestamp) {
  const nowDate = (timestamp ? new Date(timestamp) : new Date()).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
  const targetDate = new Date(getTimestamp8(nowDate));
  return targetDate;
}

/**
 * 日期转通用对象
 */
function date2obj(date) {
  const Y = date.getFullYear();
  const M = date.getMonth();
  const D = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const d = date.getDay();

  return {
    Y, M, D, h, m, s, d,
  };
}

/**
 * 日期转文本
 */
function date2str(date, separator = '-') {
  const obj = date2obj(date);
  return [obj.Y, utils.fix2(obj.M + 1), utils.fix2(obj.D)].join(separator);
}

/**
 * 日期文本转对象
 */
function dateStrParser(str) {
  const arr = str.split('-');
  return new Date(arr[0], arr[1] - 1, arr[2], 0, 0, 0, 0);
}

/**
 * 时间字符串大小比较
 */
function compareTimeStr(s1, s2) {
  if (s1 === s2) {
    return 0;
  }

  const v1 = s1.replace(':', '');
  const v2 = s2.replace(':', '');

  if (v1 - v2 > 0) {
    return 1;
  }
  return -1;
}

/**
 * 日期字符串大小比较
 */
function compareDateStr(s1, s2) {
  if (s1 === s2) {
    return 0;
  }

  const v1 = s1.replace(/-/g, '');
  const v2 = s2.replace(/-/g, '');

  if (v1 - v2 > 0) {
    return 1;
  }
  return -1;
}

/**
 * 日期时间字符串大小比较
 */
function compareDateTimeStr(s1, s2) {
  if (s1 === s2) {
    return 0;
  }

  const v1 = s1.replace(/[^\d]/g, '');
  const v2 = s2.replace(/[^\d]/g, '');

  if (v1 - v2 > 0) {
    return 1;
  }
  return -1;
}


function timeZoneTimestamp(timestamp, tz) {
  if (!timestamp) {
    return '';
  }
  const timeStr = new Date(timestamp).toLocaleString(undefined, {
    timeZone: tz,
  });
  return new Date(timeStr).getTime();
}

module.exports = {
  timeZoneOffset,
  getTimestamp8,
  getDate8,
  date2obj,
  dateStrParser,
  date2str,
  compareTimeStr,
  compareDateStr,
  compareDateTimeStr,
  timeZoneTimestamp,
};
