const R = require('./prototype.js');
// fn
const currentFn = require('./fn/current.js');
const errFn = require('./fn/err.js');
const cachifyFn = require('./fn/cachify.js');
const getWorkTypeTableFn = require('./fn/getWorkTypeTable.js');
// api
const api = require('./api/index.js');
/**
 * 备注：为了使errPicker正确工作，
 * 请尽量保持返回原始的err对象，避免自定义err对象
 * 若需要自定义err对象，请统一使用以下结构体：
 * { msg: '错误信息', detail: '详情' }
 */

R.use(currentFn);
R.use(errFn);
R.use(cachifyFn);
R.use(getWorkTypeTableFn);


R.use(api);
R.use(currentFn);


module.exports = R;
