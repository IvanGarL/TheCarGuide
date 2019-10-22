'use strict';
var mongoose = require('mongoose');
const uri = "mongodb+srv://user:user@the-car-guide-4hvcc.mongodb.net/test?retryWrites=true&w=majority";

module.exports = function (env) {
    switch (env) {
        //Ejecución local
        case "dev": {
            mongoose.connect('mongodb://localhost:27017/the-car-guide', { useNewUrlParser: true });
            mongoose.set('useCreateIndex', true);
        } break;
        //Producción
        case "prod": {
            mongoose.connect(uri, { useNewUrlParser: true});
            mongoose.set('useCreateIndex', true);
        } break;
    }
}

module.exports.mongoose = mongoose; 