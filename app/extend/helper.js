/**
 * Created by star on 2017/5/2.
 */
'use strict';

const defaultsp1 = '@#$*';
const defaultsp2 = '$%^&';
const accesstokendeskey = '2871sjks';
const des = require('./des');
module.exports = {
  // 生成token，规则 = encode("uid + sp1 + date + sp2", deskey),sp1和sp2为固定值，deskey为加密key
  createToken(uid) {
    const date = new Date().getTime() / 1000;
    const token = uid + defaultsp1 + date + defaultsp2;
    return des.encrypt(token, accesstokendeskey);
  },
  decryptToken(token) {
    const tokenConfig = {};
    const accessToken = des.decrypt(token, accesstokendeskey);
    const index = accessToken.indexOf(defaultsp1);
    const index2 = accessToken.indexOf(defaultsp2);
    if (index === -1 || index2 === -1) return tokenConfig;
    tokenConfig.uid = accessToken.substring(0, index);
    tokenConfig.date = accessToken.substring(index + defaultsp1.length, index2);
    tokenConfig.token = accessToken;
    return tokenConfig;
  },
};
