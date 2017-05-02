/**
 * Created by star on 2017/5/2.
 */
'use strict';

const defaultsp1 = '@#$*';
const defaultsp2 = '$%^&';
const accesstokendeskey = 2871;

module.exports = {
  // 生成token，规则 = encode("uid + sp1 + date + sp2", deskey),sp1和sp2为固定值，deskey为加密key
  createToken(uid) {
    const date = new Date().getTime() / 1000;
    const token = uid + defaultsp1 + date + defaultsp2;

  },
};
