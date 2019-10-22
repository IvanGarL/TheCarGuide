'use strict';
var User = require('./model').User;

module.exports = {
    userAlreadyExists: function (email) {
        return User.findOne({ email: email }).exec().then(function (docs, err) {
            if (typeof docs != "undefined" && docs != null) {
                console.log(docs);
                return true;
            }
            return false;
        });
    },
    createUser: async (userInfo, hashedPassword) => {
        userInfo.password = hashedPassword;
        const user = new User(userInfo);
        try {
            const result = await user.save();
            var createdUser = {
                name: result._doc.name,
            };
            console.log("Se ha creado exitosamente a " + user.name + " (ﾉ´ヮ´)ﾉ*: ･ﾟ");
            return createdUser;
        } catch (err) {
            console.log('Oh no! (´◉◞౪◟◉)', err);
            var msg = "";
            for (var key in err.errors) {
                if (err.errors.hasOwnProperty(key)) {
                    msg += "Property " + err.errors[key].path + " " + err.errors[key].kind + "\n";
                }
            }
            if (err.code = 11000) {
                msg = "Ya existe un usuario con ese email";
            }
            err.status = 412;
            err.msg = msg;
            throw err;

        }
    },
    deleteAllUsers: function () {
        User.collection.drop();
    },
    getAllUsers: function (res) {
        User.find({},{ refreshToken: false, _id: false, password:false }).then(function (users) {
            res.status(200).send(users);
        });
    },
}