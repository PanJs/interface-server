'use strict';



module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493285411479_6518';

  return config;
};

/**
 * 静态文件配置
 * @type {{}}
 */
exports.static = {
  // maxAge: 31536000,

};
