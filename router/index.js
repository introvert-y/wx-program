const { encode, decode } = require('./data.js');
const { push, replace } = require('./forward.js');
const pop = require('./pop.js');
const relaunch = require('./relaunch.js');

const router = {
  encode,
  decode,
  push,
  replace,
  pop,
  relaunch,
  navigate,
};

function navigate(e, method = 'push') {
  const { info } = e.currentTarget.dataset;
  router[method](info);
}

module.exports = router;
