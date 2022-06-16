const express = require('express');
const router = express.Router();

const {body, validationResult} = require('express-validator');

router.get('/contacto', (req,res) => {  
    res.render('contacto/contacto', { values: {} }); //PARA INICIALIZAR LA VARIABLE
})

router.post('/contacto', [
    body('nombre', 'El nombre es obligatorio y debe tener 3 caracteres como mínimo.')
    .exists().isLength(3),      //PARAMETROS DE VALIDACION
    body('email', 'El correo es obligatorio').exists().isEmail(),
    body('mensaje', 'El mensaje es obligatorio').exists().notEmpty().isLength({min: 3}),
], (req,res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        res.send('Enviando...');         // NO HAY ERROR
    } else {
        res.render('contacto/contacto', {values: req.body,  errors: errors.array() })   //ERRORES Y VALORES DEL FORM
    }
    console.log(req.body, errors);
    

});

module.exports = router;