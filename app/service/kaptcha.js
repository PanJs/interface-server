/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/5/3
 * Time: 上午9:30
 * To change this template use File | Settings | File Templates.
 */
'use strict';

const captchapng = require('captchapng');

module.exports = app => {
  class User extends app.Service {
    * getCaptcha(key) {
      const p = new captchapng(80, 30, key); // width,height,numeric captcha
      p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
      p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
      const img = p.getBase64();
      return img
    }
  }
  return User;
};
