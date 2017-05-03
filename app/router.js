'use strict';

module.exports = app => {
  app.get(`${app.config.pkg.path}/kaptcha/init`, 'kaptcha.init');
  app.get(`${app.config.pkg.path}/test`, 'home.index');
  const loginHandler = app.middlewares.loginHandler;
  app.get(`${app.config.appConfig.path}/test`, loginHandler, 'home.index');
};
