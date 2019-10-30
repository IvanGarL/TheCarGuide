'use strict';
const router_auth = require('./authorization/authController');
const router_users = require('./user/userController');
const router_cars = require('./car/carController');

var routers = function(app) {
    
    app.use('/auth', router_auth);
    app.use('/users', router_users);
    app.use('/cars', router_cars);
    
};

module.exports = routers;