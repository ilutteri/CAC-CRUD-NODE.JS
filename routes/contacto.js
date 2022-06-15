const express = require('express');
const router = express.Router();

router.get('/contacto', (req,res) => {  
    res.render('contacto/contacto');
})

router.post('/contacto', (req,res) => {
    console.log(req.body);
    res.send('Enviando...');

});

module.exports = router;