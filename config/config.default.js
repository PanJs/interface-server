'use strict';



module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493285411479_6518';

  // config response_handler middleware
  config.middleware = [ 'responseHandler' ];
  config.responseHandler = { match: appInfo.pkg.path };

  return config;
};

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'mimaijinfu.mysql.rds.aliyuncs.com',
    // 端口号
    port: '3306',
    // 用户名
    user: 'star',
    // 密码
    password: 'Codingstar1018',
    // 数据库名
    database: 'gointerface',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

exports.static = {
  prefix: '/public/',
};

exports.security = {
  domainWhiteList: [],
};
exports.cors = {};
