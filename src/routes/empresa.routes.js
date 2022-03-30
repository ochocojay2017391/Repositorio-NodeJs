const express = require('express');
const empresaControlador = require('../controllers/empresa.controller');
const md_autenticacion = require('../middlewares/autenticacion');

const api = express.Router();



module.exports = api;