/**
 *
 */
'use strict';
const crypto = require('crypto');
module.exports = {
  /**
   * 加密
   * @param {string} str 加密字符串
   * @param {string} key 加密秘钥
   * @return {*} 加密后的字符串
   */
  encrypt(str, key) {
    const cipher = crypto.createCipheriv('des-ecb', key, '');
    cipher.setAutoPadding(true);
    let ciph = cipher.update(str, 'utf8', 'base64');
    ciph += cipher.final('base64');
    return ciph;
  },
  /**
   * dec解密
   * @param {string} str 加密字符串
   * @param {string} key 加密秘钥
   * @return {*} 解密后的字符串
   */
  decrypt(str, key) {
    const decipher = crypto.createDecipheriv('des-ecb', key, '');
    decipher.setAutoPadding(true);
    let txt = decipher.update(str, 'base64', 'utf8');
    txt += decipher.final('utf8');
    return txt;
  },
  /**
   * md5 加密
   * @param {string} str 加密字符串
   * @return {*} 加密后的字符串
   */
  md5(str) {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
  },
  /**
   * 校验字符串货对象为空
   * @param {string} str 加密字符串
   * @return {boolean} 校验结果
   */
  isEmpty(str) {
    if (str === '' || str === null || str === undefined) {
      return true;
    }
    return false;
  },
};
