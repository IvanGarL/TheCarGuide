'use strict';
const router_auth = require('./authorization/authController');
const router_users = require('./user/userController');
const router_cars = require('./car/carController');
const router_services = require('./service/serviceController')

var routers = function(app) {
    
    app.use('/auth', router_auth);
    app.use('/users', router_users);
    app.use('/cars', router_cars);
    app.use('/services', router_services);
    
};

module.exports = routers;