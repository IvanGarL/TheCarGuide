"use strict";
var mongoose = require("../../config/mongoose").mongoose,
  Schema = mongoose.Schema;

var schema = {
  userSchema: new Schema({
    nickName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    image: { type: String, required: false },
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "El número de teléfono debe ser un número entero."
        }
    },
    password: { type: String, required: true },
  })
};

var model = {
  User: mongoose.model("users", schema)
};

module.exports = model;
