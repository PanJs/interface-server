/**
 * Created by star on 2017/5/2.
 */
'use strict';
module.exports = () => {
  return function* (next) {
    // 校验登录信息
    const accessToken = this.ctx.helper.getToken();
    if (this.ctx.tools.isEmpty(accessToken)) return this.throw({ 'msg': '您还未登录，请先登录' });
    const tokenConfig = this.ctx.helper.token.decryptToken(accessToken);
    if (this.ctx.tools.isEmpty(tokenConfig.token)
       || this.ctx.tools.isEmpty(tokenConfig.date)
       || this.ctx.tools.isEmpty(tokenConfig.uid)
       || this.ctx.tools.isEmpty(tokenConfig.password)) return this.throw({ 'msg': '请求不合法' });
    // 校验过期时间
    if (new Date().getTime() - tokenConfig.date > this.app.config.appConfig.accessTokenKeyTime) {
      return this.throw({ 'msg': '您的登录已失效，请重新登录' });
    }
    // 请求数据库校验用户uid
    const password = yield this.app.mysql.select('tb_user_login', { where: { user_id: tokenConfig.uid }, columns: [ 'password' ] });
    if (this.ctx.tools.isEmpty(password) || password !== this.ctx.helper.token.md5(tokenConfig.password)) return this.throw({ 'msg': '请求不合法' });
    yield next;
  };
};
