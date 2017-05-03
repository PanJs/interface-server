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
  return app.model.define('user', {
    id: { field: 'id', type: app.Sequelize.BIGINT, primaryKey: true },
    email: { field: 'email', type: app.Sequelize.STRING },
    emailStatus: { field: 'email_status', type: app.Sequelize.INTEGER },
    name: { field: 'name', type: app.Sequelize.STRING },
    telephone: { field: 'telephone', type: app.Sequelize.STRING },
    photo: { field: 'photo', type: app.Sequelize.STRING },
    projectCount: { field: 'project_count', type: app.Sequelize.INTEGER },
    updateTime: { field: 'update_time', type: app.Sequelize.BIGINT },
    createTime: { field: 'create_time', type: app.Sequelize.BIGINT },
  }, {
    timestamps: true,
    tableName: 'tb_user',
    createdAt: 'updateTime',
    updatedAt: 'createTime',
  }, {
    classMethods: {},
  });
};
