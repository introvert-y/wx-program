/**
 * 校验函数
 */
const fns = {
  date: validateDate, // 日期
  salary: validateSalary, // 薪水
  workingTime: validateWorkingTime, // 工时
  remark: validateRemark, // 备注
  receive: validateReceive, // 实收金额
  borrow: validateBorrow, // 借款
  userName: validateUserName, // 人名
  workType: validateWorkType, // 工种
  phone: validatePhone, // 手机号码
  phoneCode: validatePhoneCode, // 短信验证码
  userAvt: validateUserAvt, // 用户头像
  workerCode: validateWorkerCode, // 工号
  bankCardNumber: validateBankCardNumber, // 银行卡号
  realNamePics: validateRealNamePics, // 实名图片
  groupName: validateGroupName, // 校验考勤组名
  teamName: validateTeamName, // 校验考勤组名
  projectName: validateProjectName, // 项目名
  companyName: validateCompanyName, // 校验公司名
  address: validateAddress, // 校验地址
  idCard: validateIdCard, // 校验身份证
};

/**
 * 检验
 */
function validate(options) {
  const keys = Object.keys(options);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const val = options[key];
    const fn = fns[key];

    if (fn) {
      const res = (val && val.label) ? fn(val.value, val.label) : fn(val);

      if (res.msg) {
        return res;
      }
    } else {
      return {
        msg: `找不到校验函数：${key}`,
      };
    }
  }

  return true;
}

/**
 * 校验浮点数
 */
function checkFloatNum(n, limit) {
  const arr = n.toString().split('.');

  if (arr[1] && (arr[1].length > limit)) {
    return false;
  }

  return true;
}

/**
 * 校验日期
 */
function validateDate(val) {
  if (!val) {
    return {
      msg: '请选择日期',
    };
  }

  return true;
}

/**
 * 检验薪水
 */
function validateSalary(val) {
  const s = val - 0;

  if (!val) {
    return {
      msg: '请输入日薪',
    };
  }

  if (!s && s !== 0) {
    return {
      msg: '日薪格式错误',
    };
  }

  if (s <= 0) {
    return {
      msg: '日薪必须大于0',
    };
  }

  if (!checkFloatNum(s, 1)) {
    return {
      msg: '日薪最多保留一位小数',
    };
  }

  return true;
}

/**
 * 校验记工数
 */
function validateWorkingTime(val) {
  const count = val - 0;

  if (!val) {
    return {
      msg: '请输入记工数',
    };
  }

  if (!count && count !== 0) {
    return {
      msg: '记工数格式错误',
    };
  }

  if (count <= 0) {
    return {
      msg: '记工数必须大于0',
    };
  }

  if (count > 10) {
    return {
      msg: '记工数不能大于10',
    };
  }

  if (!checkFloatNum(count, 1)) {
    return {
      msg: '记工最多保留一位小数',
    };
  }

  return true;
}

/**
 * 校验备注
 */
function validateRemark(val, label = '备注') {
  if (val.length > 30) {
    return {
      msg: `${label}不能超过30字`,
    };
  }

  return true;
}

/**
 * 检验实收
 */
function validateReceive(val) {
  const s = val - 0;

  if (!val) {
    return {
      msg: '请输入金额',
    };
  }

  if (!s && s !== 0) {
    return {
      msg: '金额格式错误',
    };
  }

  if (s <= 0) {
    return {
      msg: '金额必须大于0',
    };
  }

  if (!checkFloatNum(s, 1)) {
    return {
      msg: '金额最多保留一位小数',
    };
  }

  return true;
}

/**
 * 检验借支
 */
function validateBorrow(val) {
  const s = val - 0;

  if (!val) {
    return {
      msg: '请输入金额',
    };
  }

  if (!s && s !== 0) {
    return {
      msg: '金额格式错误',
    };
  }

  if (s <= 0) {
    return {
      msg: '金额必须大于0',
    };
  }

  if (!checkFloatNum(s, 1)) {
    return {
      msg: '金额最多保留一位小数',
    };
  }

  return true;
}

/**
 * 校验用户名
 */
function validateUserName(val, label = '姓名') {
  if (!/\S/.test(val)) {
    return {
      msg: `请填写${label}`,
    };
  }

  if (val.length > 20) {
    return {
      msg: `${label}长度不能大于20`,
    };
  }

  return true;
}

/**
 * 校验考勤组名
 */
function validateGroupName(val) {
  if (!/\S/.test(val)) {
    return {
      msg: '请填写考勤规则名',
    };
  }

  if (val.length > 20) {
    return {
      msg: '考勤规则名长度不能大于20',
    };
  }

  return true;
}

/**
 * 校验班组名
 */
function validateTeamName(val) {
  if (!/\S/.test(val)) {
    return {
      msg: '请填写班组名',
    };
  }

  if (val.length > 20) {
    return {
      msg: '班组名长度不能大于20',
    };
  }

  return true;
}

/**
 * 校验项目名
 */
function validateProjectName(val) {
  if (!/\S/.test(val)) {
    return {
      msg: '请填写项目名',
    };
  }

  if (val.length > 30) {
    return {
      msg: '项目名长度不能大于30',
    };
  }

  return true;
}

/**
 * 校验工种
 */
function validateWorkType(val) {
  if (!val) {
    return {
      msg: '请选择工种',
    };
  }

  return true;
}

/**
 * 校验手机号码
 */
function validatePhone(val, label = '手机号码') {
  if (val === '') {
    return {
      msg: `请填写${label}`,
    };
  }

  if (!/^\d{11}$/.test(val)) {
    return {
      msg: `${label}格式错误`,
    };
  }

  return true;
}

/**
 * 校验银行卡帐号
 */
function validateBankCardNumber(val) {
  if (val === '') {
    return {
      msg: '请填写银行卡帐号',
    };
  }

  if (!/^\d{11,}$/.test(val)) {
    return {
      msg: '银行卡帐号格式错误',
    };
  }

  return true;
}

/**
 * 校验手机验证码
 */
function validatePhoneCode(val) {
  if (val === '') {
    return {
      msg: '请填写验证码',
    };
  }

  return true;
}

/**
 * 校验日期
 */
function validateUserAvt(val) {
  if (!val) {
    return {
      msg: '请选择头像',
    };
  }

  return true;
}

/**
 * 校验工号
 */
function validateWorkerCode(val, label = '工号') {
  if (!val) {
    return {
      msg: `请输入${label}`,
    };
  }
  if (!/^\d+$/.test(val)) {
    return {
      msg: `${label}格式错误`,
    };
  }

  return true;
}

/**
 * 校验实名图片
 */
function validateRealNamePics(pics) {
  if (!pics.front) {
    return {
      msg: '请拍摄身份证正面照',
    };
  }

  if (!pics.back) {
    return {
      msg: '请拍摄身份证背面照',
    };
  }

  if (!pics.face) {
    return {
      msg: '请拍摄正脸照',
    };
  }

  return true;
}

/**
 * 校验公司名
 */
function validateCompanyName(val, label = '公司名') {
  if (!/\S/.test(val)) {
    return {
      msg: `请填写${label}`,
    };
  }

  if (val.length > 30) {
    return {
      msg: `${label}长度不能大于30`,
    };
  }

  return true;
}

/**
 * 校验地址
 */
function validateAddress(val, label = '地址') {
  if (!/\S/.test(val)) {
    return {
      msg: `请填写${label}`,
    };
  }

  if (val.length > 100) {
    return {
      msg: `${label}长度不能大于100`,
    };
  }

  return true;
}

/**
 * 校验身份证
 */
function validateIdCard(val, label = '身份证号') {
  if (!val || !/\S/.test(val)) {
    return {
      msg: `请输入${label}`,
    };
  }

  if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val)) {
    return {
      msg: `${label}格式错误`,
    };
  }

  return true;
}

module.exports = {
  validate,
};
