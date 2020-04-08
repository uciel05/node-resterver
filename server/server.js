require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse Application/json
app.use(bodyParser.json());

//Configuracion global de rutas
app.use( require('./routes/index') );

mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useCreateIndex: true}, (err, res) => {
    if(err) throw err;
    
    console.log('Base de datos en linea.');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto 3000');
});