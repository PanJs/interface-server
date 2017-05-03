'use strict';

module.exports = app => {
  app.get(`${app.config.pkg.path}/kaptcha/init`, 'kaptcha.init');
  app.get(`${app.config.pkg.path}/test`, 'home.index');
};
