const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresasSchema = Schema({
    
    nombreSucursal: String,
    direccionSucursal: String,
    
});

module.exports = mongoose.model('Empresas', EmpresasSchema)