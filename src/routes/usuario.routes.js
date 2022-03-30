const express = require('express');
const usuarioControlador = require('../controllers/usuario.controller');
const md_autenticacion = require('../middlewares/autenticacion');

const api = express.Router();



module.exports = api;