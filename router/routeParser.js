const routes = require('./routes.js');

const routeMap = {};

Object.keys(routes).map((key) => {
  const route = routes[key];
  routeMap[key] = route;
  if (route.path) {
    routeMap[route.path] = route;
  }
  return key;
});

/**
 * 路由名称转路径
 * @param {string} name 路由名
 * 思路为先把.转为/,然后找到大写字母，并在其前面插入_最后全部转为小写字母
 */
function name2path(name) {
  return name.replace(/\./g, '/').replace(/\B([A-Z])/g, '_$1').toLowerCase();
}

/**
 * 路由解析
 * @param {string} name 路由名
 */
function parser(name) {
  if (!name) {
    throw new Error('路由名字不能为空');
  }
  let route = routeMap[name];
  if (!route) {
    const path = `/pages/${name2path(name)}/index`;
    route = routeMap[path] || {
      type: 'page',
      path,
    };
  }
  return route;
}

module.exports = parser;
