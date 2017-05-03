'use strict';

module.exports = app => {

  app.post(`${app.config.appConfig.path}/user/login`, 'user.login');

  app.get(`${app.config.appConfig.path}/kaptcha/init`, 'kaptcha.init');

  app.get(`${app.config.appConfig.path}/test`, 'home.index');
};
