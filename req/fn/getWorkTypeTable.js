const cache = {
  table: null,
};

function parse(data) {
  const res = {};
  data.map((d) => {
    res[d.code] = {
      label: d.value,
      value: d.code,
    };
    if (d.children && d.children.length > 0) {
      d.children.map((dc) => {
        const item = {
          label: dc.value,
          value: dc.code,
          parent: {
            label: d.value,
            value: d.code,
          },
        };
        res[dc.code] = item;
        res[`${d.code}|${dc.code}`] = item;
        return dc;
      });
    }
    return d;
  });
  return res;
}

function plugin(R) {
  return () => new Promise((res, rej) => {
    if (cache.table) {
      res(cache.table);
    } else {
      R.cachify('common.getMetaData')()
        .then((r) => {
          if (r.code === 0) {
            const { code, data, msg } = r;
            const table = {
              code,
              msg,
              data: parse(data.workerCategorys),
            };
            cache.table = table;
            res(table);
          } else {
            res(r);
          }
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
}

module.exports = {
  install(R, req) {
    R.getWorkTypeTable = plugin(R, req);
  },
};
