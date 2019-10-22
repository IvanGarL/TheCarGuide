'use strict';
var router_user = require('./user/controller'),

var routers = function(app) {
    app.use('/users', router_user);
};

module.exports = routers;