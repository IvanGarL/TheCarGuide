const express = require('express'),
    router = express.Router(),
    users = require('./queries'),
    validator = require('./validator');


// get all users
router.get('/', function (_, res, _) {
    res.send('Hi there, you are using the users app!');
});

//Create a new user
router.post('/signUp', validator.validate('createUser'), function (req, res, next) {
    console.log(req.body.name + " quiere registrarse como usuario.");
    req
        .getValidationResult() // Obtenemos el resultado de la validación 
        .then(validationHandler())
        .then(() => {
            console.log("A punto de crear al user con nombre: " + req.body.name);
            var resp = users.createUser(req.body, tokenResp, hashPass);
            resp.then(function (result) {
                res.status(200).send(result);
            }).catch(function (err) {
                console.log(err)
                if (err.status) {
                    //res.send(err.status, err.msg);
                    res.status(err.status).send(err.msg);
                    return;
                }
                res.sendStatus(500);
                return;
            });
        }).catch(error => {
            //res.send(412, error.message)
            res.status(412).send(error.message);
        })
});

module.exports = router;