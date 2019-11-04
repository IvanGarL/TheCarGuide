'use strict';
const router_auth = require('./authorization/authController');
const router_users = require('./user/userController');
const router_cars = require('./car/carController');
const router_comps = require('./comparison/comparisonController');
const router_services = require('./service/serviceController')

var routers = function(app) {
    
    app.use('/auth', router_auth);
    app.use('/users', router_users);
    app.use('/cars', router_cars);
    app.use('/comparisons', router_comps);
    app.use('/services', router_services);
    
};

module.exports = routers;