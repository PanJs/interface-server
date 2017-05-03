/**
 * 工具方法
 */
'use strict';
module.exports = {
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
