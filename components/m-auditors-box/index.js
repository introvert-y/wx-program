const { req, router } = require('../../framework/index.js');
const { typeMap, getList } = require('./meta.js');

Component({
  properties: {
    cid: {
      type: String,
      value: '',
    },
    pid: {
      type: String,
      value: '',
    },
    codes: {
      type: Array,
      value: [],
    },
    type: {
      type: String,
      value: typeMap.COMMON,
    },
    superAdmin: {
      type: Boolean,
      value: false,
    },
    companySuperAdmin: {
      type: Boolean,
      value: false,
    },
    gid: {
      type: String,
      value: '',
    },
  },
  data: {
    list: [],
    total: 0,
  },
  attached() {
    this.getList();
  },
  methods: {
    getData() {
      const {
        cid, pid, codes, type, superAdmin, companySuperAdmin, gid,
      } = this.data;
      return {
        cid,
        pid,
        codes,
        type,
        superAdmin,
        companySuperAdmin,
        attendanceGroupId: gid,
      };
    },
    /**
     * 获取审批人
     */
    getList() {
      const that = this;
      getList({ ...that.getData(), page: 1, size: 2 })
        .then((res) => {
          if (res.code !== 0) {
            req.err.show(res.msg);
            return;
          }
          const { list, total } = res.data;
          if (!total || !list.filter(u => !u.preUser).length) {
            that.triggerEvent('none');
          }
          that.setData({
            list: list.splice(0, 2),
            total,
          });
        })
        .catch(req.err.show);
    },
    /**
     * 查看全部
     */
    showAll() {
      router.push({
        name: 'company.auditors',
        data: this.getData(),
      });
    },
  },
});
