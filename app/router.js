'use strict';

module.exports = app => {

  // 基础通用访问路径配置
  const basePath = [
    'users/login',
    'kaptcha/init',
  ]
  basePath.forEach(value => {
    app.get(`${app.config.path}/${value}`, value.replace(/\//gi, '.'));
  })
  // 特殊路径映射
  const loginHandler = app.middlewares.loginHandler;
  app.get(`${app.config.appConfig.path}/test`, loginHandler, 'home.index');
};
