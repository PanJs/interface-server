'use strict';

module.exports = app => {

  // 基础通用访问路径配置
  const basePath = [
    'users/login',
    'kaptcha/init',
  ]
  basePath.forEach(value => {
    app.get(`${app.config.pkg.path}/${value}`, value.replace(/\//gi, '.'));
  })
  // 特殊路径映射
};
