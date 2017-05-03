/**
 * Created by star on 2017/5/2.
 */
'use strict';
module.exports = () => {
  return function* (next) {
    try {
      yield next;
      const result = this.body;
      // 包装返回参数
      this.body = {
        code: 1,
        msg: 'success',
        data: result,
      };
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      this.app.emit('error', err, this);
      this.body = {
        code: err.status,
        msg: this.helper.tools.isEmpty(err.msg) ? err.message : err.msg,
      };
    }
  };
};
