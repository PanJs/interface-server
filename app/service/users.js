/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/5/3
 * Time: 上午9:30
 * To change this template use File | Settings | File Templates.
 */
'use strict';

module.exports = app => {
  class User extends app.Service {
    * login (obj) {
      console.log(obj)
    }
  }
  return User;
};
