'use strict';
const router_auth = require('./authorization/authController');
const router_users = require('./user-two/userController');
var router_user = require('./user/controller');

var routers = function(app) {
    app.use('/users', router_user);
    app.use('/users-two', router_users);
    app.use('/auth', router_auth);
};

module.exports = routers;