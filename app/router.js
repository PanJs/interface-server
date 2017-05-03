'use strict';

module.exports = app => {

  app.post(`${app.config.appConfig.path}/users/login`, 'user.login');

  app.get(`${app.config.appConfig.path}/kaptcha/init`, 'kaptcha.init');

  app.get(`${app.config.appConfig.path}/test`, 'home.index');
};
