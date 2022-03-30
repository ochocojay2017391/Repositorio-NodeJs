/*
const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise; //function (){}
mongoose.connect('mongodb://localhost:27017/SucursalesDeEmpresas', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3000, function() {
        console.log("Hola IN6BM, esta corriendo en el puerto 3000!")
    })

}).catch(error => console.log(error));
*/
/* Aqui se crea el admin inicio */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const app = require('./app');
const ADMIN = require('./src/models/usuarios.model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/SucursalesDeEmpresas', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const PORT = 3000;
    app.listen(PORT, () => console.log((`Escuchando http://localhost:${PORT}`)));

    ADMIN.find({}, (err, adminEncontrado) => {
        if (err) return console.log('Error en la creacion de administrador.');
        if (adminEncontrado.length > 0) {
            return console.log(('El administrador ya existe'));
        } else {
            const adminModel = new ADMIN();
            adminModel.nombre = 'admin';
            adminModel.email = 'admin123@gmail.com';
            bcrypt.hash('123456', null, null, (err, passEncriptado) => {
                if (err) return console.log(err);
                adminModel.password = passEncriptado;
                adminModel.save((err, datoGuardado) => {
                    if (err) return console.log('Error a la hora de guardar administrador.');
                    !datoGuardado
                        ?
                        console.log('No viene el dato de admin') :
                        console.log(('Administrador creado con exito.'));
                });
            });
        }
    });
});