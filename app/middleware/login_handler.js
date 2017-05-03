/**
 * Created by star on 2017/5/2.
 */
'use strict';
module.exports = () => {
  return function* (next) {
    // 校验登录信息
    yield next;
  };
};
