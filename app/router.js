'use strict';

module.exports = app => {
  const loginHandler = app.middlewares.loginHandler;
  app.get(`${app.config.appConfig.path}/test`, loginHandler, 'home.index');
};
