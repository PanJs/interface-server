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
    * login(obj) {
      console.log(obj)
      const user = yield this.ctx.model.UserLogin.findOne({
        where: { email: obj.account },
      });
      if (user) {
        console.log(user.password)
        console.log(this.ctx.helper.tools.md5(obj.password))
        if (user.password === this.ctx.helper.tools.md5(obj.password)) {
          console.log(user.userId, obj.password)
          this.ctx.helper.token.setToken.call(this, user.userId, obj.password)
        }
      }
    }
  }
  return User;
};
