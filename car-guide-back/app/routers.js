'use strict';
const router_auth = require('./authorization/authController');
const router_users = require('./user/userController');
const router_cars = require('./car/carController');
const router_services = require('./service/serviceController');
const router_sales = require('./sale/saleController');

var routers = function(app) {
    app.use('/auth', router_auth);
    app.use('/users', router_users);
    app.use('/cars', router_cars);
    app.use('/services', router_services);
    app.use('/sales', router_sales)
};

module.exports = routers;