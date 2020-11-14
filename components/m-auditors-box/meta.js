const { req } = require('../../framework/index.js');

const typeMap = {
  COMMON: 'common',
  BLACKLIST: 'blacklist',
  ATTENDANCE: 'attendance',
};

const getList = (data) => {
  const {
    type, cid, pid, codes,
    superAdmin, companySuperAdmin,
    page, size, attendanceGroupId,
  } = data;
  if (type === typeMap.ATTENDANCE) {
    return req.project.getListAttendanceApplyApprovers({
      attendanceGroupId,
    })
      .then((res) => {
        if (res.code !== 0) {
          return res;
        }
        const { list, total } = res.data;
        return {
          code: 0,
          data: {
            list: list.map(u => ({
              img: u.headImg,
              name: u.name || u.userName || u.nikeName,
              id: u.id,
              preUser: u.preUser,
            })),
            total,
          },
        };
      });
  }
  if (type === typeMap.BLACKLIST) {
    return req.company.getBlacklistAuditors({
      companyId: cid,
    })
      .then((res) => {
        if (res.code !== 0) {
          return res;
        }
        const { list, total } = res.data;
        return {
          code: 0,
          data: {
            list: list.map(u => ({
              img: u.img,
              name: u.name || u.userName || u.nikeName,
              id: u.id,
              preUser: u.preUser,
            })),
            total,
          },
        };
      });
  }
  const d = {};
  if (page) {
    d.page = page;
  }
  if (size) {
    d.size = size;
  }
  if (pid) {
    d.projectId = pid;
    d.permissionCodes = codes;
    d.includeCompanySuperAdmin = companySuperAdmin;
    d.incluedeProjectSuperAdmin = superAdmin;
    return req.project.getAuditors(d)
      .then((res) => {
        if (res.code !== 0) {
          return res;
        }
        const { list, total } = res.data;
        return {
          code: 0,
          data: {
            list: list.map(u => ({
              img: u.headImg,
              name: u.name || u.nickName,
              id: u.userId,
              preUser: u.preUser === '01',
            })),
            total,
          },
        };
      });
  }
  d.companyId = cid;
  d.permissionCodes = codes;
  d.includeSuperAdmin = superAdmin;
  return req.company.getAuditors(d)
    .then((res) => {
      if (res.code !== 0) {
        return res;
      }
      const { list, total } = res.data;
      return {
        code: 0,
        data: {
          list: list.map(u => ({
            img: u.headImg,
            name: u.userName,
            id: u.userId,
            preUser: u.preUser === '01',
          })),
          total,
        },
      };
    });
};

module.exports = {
  typeMap,
  getList,
};
