/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/5/3
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
'use strict';
module.exports = app => {
  return app.model.define('userLogin', {
    id: { field: 'id', type: app.Sequelize.BIGINT, primaryKey: true },
    password: { field: 'password', type: app.Sequelize.STRING },
    userId: { field: 'user_id', type: app.Sequelize.BIGINT },
    email: { field: 'email', type: app.Sequelize.STRING },
    status: { field: 'status', type: app.Sequelize.INTEGER },
    lastIp: { field: 'last_ip', type: app.Sequelize.STRING },
    lastLogin: { field: 'last_login', type: app.Sequelize.BIGINT },
    updateTime: { field: 'update_time', type: app.Sequelize.BIGINT },
    createTime: { field: 'create_time', type: app.Sequelize.BIGINT },
  }, {
    timestamps: true,
    tableName: 'tb_user_login',
    createdAt: 'updateTime',
    updatedAt: 'createTime',
  }, {
    classMethods: {},
  });
};
