'use strict';

module.exports = app => {
  app.get('/api/test/index', 'test.index');
  app.get('api/det', 'home.index');
};
