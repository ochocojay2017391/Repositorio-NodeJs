const Empresas = require('../models/empresas.model');

// BUSCAR EMPRESAS
function ObtenerEmpresas (req, res) {
    Empresas.find((err, empresasObtenidas) => {
        if (err) return res.send({ mensaje: "Error: " + err })

        return res.send({ empresas: empresasObtenidas })
    })
}

module.exports = {
    ObtenerEmpresas
}