'use strict';
module.exports = {
  path: '/api', // 接口请求路径前缀
  accessTokenKey: 'uenjeokwnqkm', // cookies的key信息
  accessTokenKeyTime: 86400 * 1000, // cookies的key有效期，毫秒数
  projectNumber: 10, // 默认可创建项目数
  groupNUmber: 5, // 默认可创建分组数
  interfaceNumber: 20, // 默认可创建接口数
  groupDefaultName: 'default', // 默认创建的分组名称
};
