'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * login () {
      const { ctx } = this;
      const createRule = {
        account: { type: 'string' },
        deskey: { type: 'string' },
        kaptcha: { type: 'string' },
        password: { type: 'string' },
      };

      // 1:验证参数

      // 校验参数
      ctx.validate(createRule);

      // 2:验证参数
      ctx.service.users.login(ctx.request.body)
    }
  }
  return HomeController;
};