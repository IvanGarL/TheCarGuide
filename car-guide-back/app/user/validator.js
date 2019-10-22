const { body } = require('express-validator/check')
exports.validate = (method) => {
    console.log('Validator active')
    switch (method) {
        case 'createUser': {
            return [
                body('nickName','Debe ingresar un apodo válido').exists(),
                body('name', 'Debe ingresar un nombre válido').exists(),
                body('email', 'Debe ingresar un email válido').exists().isEmail().withMessage('El formato del email no es válido'),
                body('age', 'Debe ingresar una edad válida').exists().isInt().withMessage('La edad debe ser un número válido.'),
                body('phone','Debe ingresar un número de telefono válido').exists().isInt().withMessage('El formato del número de telefono no es válido'),
                //No estoy validando la imagen porque no creo que deba ser obligatoria
                body('password', 'Debe ingresar una contraseña válida').exists(),
            ]
        }
        case 'loginUser': {
            return [
                body('email', 'Debe ingresar un email válido').exists().isEmail().withMessage('El formato del email no es válido'),
                body('password', 'Debe ingresar una contraseña válida').exists()
            ]
        }
    }
}
