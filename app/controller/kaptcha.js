/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/5/3
 * Time: 上午9:17
 * To change this template use File | Settings | File Templates.
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * init(ctx) {
      const info = {
        img: '',
        key: '',
      }
      info.img = yield ctx.service.kaptcha('1234')
      ctx.session.kaptcha = info.key;
      this.ctx.body = info;
    }
  }
  return HomeController;
};
