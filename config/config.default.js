'use strict';
const appConfig = require('./config.app')
module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493285411479_6518';

  // config middleware
  config.middleware = [ 'responseHandler', 'loginHandler' ];
  config.responseHandler = { match: `${appConfig.path}` };
  config.loginHandler = {
    ignore(ctx) {
      // 需要忽略的请求路径
      const arr = [
        '/kaptcha/init',
      ];
      let flag = false;
      arr.forEach(value => {
        const reg = new RegExp(appConfig.path + value, 'gi');
        if (reg.test(ctx.url)) {
          flag = true;
        }
      });
      return flag;
    },
  }
  config.appConfig = appConfig;

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'gointerface',
    host: 'mimaijinfu.mysql.rds.aliyuncs.com',
    port: '3306',
    username: 'star',
    password: 'Codingstar1018',
  };

  config.static = {
    prefix: '/public/',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {};
  return config;
};
