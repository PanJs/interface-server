'use strict';

module.exports = app => {
  app.get(app.config.pkg.path + '/test', 'home.index');
};
