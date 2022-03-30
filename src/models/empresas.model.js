const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresasSchema = Schema({
    
    nombreSucursal: String,
    direccionSucursal: String,
    idEmpresa: Number,
    
});

module.exports = mongoose.model('Empresas', EmpresasSchema)