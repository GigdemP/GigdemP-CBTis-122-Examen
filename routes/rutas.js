const express = require('express');

let rutas = require('./controlador.js')
let router = express.Router();

router.get('/', rutas.list);
module.exports = router;
