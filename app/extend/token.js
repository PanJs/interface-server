/**
 * Created by star on 2017/5/3.
 */
'use strict';
const defaultsp1 = '@#$*';
const defaultsp2 = '$%^&';
const accesstokendeskey = '2871sjks';
const encrypt = require('./encrypt');
const tools = require('./tools');
module.exports = {


  decryptToken(token) {
    const tokenConfig = {};
    const accessToken = encrypt.decrypt(token, accesstokendeskey);
    const index = accessToken.indexOf(defaultsp1);
    const index2 = accessToken.indexOf(defaultsp2);
    if (index === -1 || index2 === -1) return tokenConfig;
    tokenConfig.uid = accessToken.substring(0, index);
    tokenConfig.date = accessToken.substring(index + defaultsp1.length, index2);
    tokenConfig.token = accessToken;
    tokenConfig.password = accessToken.substring(index2 + defaultsp2.length);
    return tokenConfig;
  },
  getToken() {
    let accesToken = this.cookies.get(this.app.config.appConfig.accessTokenKey);
    if (tools.isEmpty(accesToken)) {
      // 从header取值
      accesToken = this.headers[ this.app.config.appConfig.accessTokenKey ];
    }
    return accesToken;
  },
  /**
   * 生成token，规则 = encode("uid + sp1 + date + sp2 + password", deskey),sp1和sp2为固定值，deskey为加密key
   * @param {string} uid 用户id
   * @param {string} password 用户密码
   */
  setToken(uid, password) {
    const date = new Date().getTime();
    let token = uid + defaultsp1 + date + defaultsp2 + password;
    token = encrypt.encrypt(token, accesstokendeskey);
    this.ctx.cookies.set(this.app.config.appConfig.accessTokenKey, token, {
      maxAge: this.app.config.appConfig.accessTokenKeyTime,
    });
  },
};
