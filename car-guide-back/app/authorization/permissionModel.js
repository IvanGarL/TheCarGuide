"use strict";
const mongoose = require ('../../config/mongoose').mongoose;
const Schema = mongoose.Schema;

const permissionSchema = mongoose.Schema({
    create : {
        type: Boolean,
        required: true
    },
    read : {
        type: Boolean,
        required: true
    },
    write : {
        type: Boolean,
        required: true
    },
    delete : {
        type: Boolean,
        required: true
    },
    rol : {
        type: Schema.Types.ObjectId, 
        ref: 'Role'
    },
    resource : {
        type: Schema.Types.ObjectId, 
        ref: 'Resource'
    }
});

const Permission = mongoose.model('Permission', permissionSchema);
module.exports = Permission;