/**
 * Created by star on 2017/5/2.
 */
'use strict';
module.exports = () => {
  return function* (next) {
    // 校验登录信息
    const accessToken = this.helper.token.getToken.call(this);
    if (this.helper.tools.isEmpty(accessToken)) return this.throw({ msg: '您还未登录，请先登录' });
    const tokenConfig = this.helper.token.decryptToken(accessToken);
    if (this.helper.tools.isEmpty(tokenConfig.token)
      || this.helper.tools.isEmpty(tokenConfig.date)
      || this.helper.tools.isEmpty(tokenConfig.uid)
      || this.helper.tools.isEmpty(tokenConfig.password)) return this.throw({ msg: '请求不合法' });
    // 校验过期时间
    if (new Date().getTime() - tokenConfig.date > this.app.config.appConfig.accessTokenKeyTime) {
      return this.throw({ msg: '您的登录已失效，请重新登录' });
    }
    // 请求数据库校验用户uid
    const user = yield this.model.UserLogin.findOne({
      where: { userId: tokenConfig.uid },
    });
    if (this.helper.tools.isEmpty(user) || user.password !== this.helper.encrypt.md5(tokenConfig.password)) return this.throw({ msg: '请求不合法' });
    yield next;
  };
};
