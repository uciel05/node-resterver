require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse Application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('Get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    res.json({body});
});

app.put('/usuario', (req, res) => {
    res.json('Put Usuario');
});

app.delete('/usuario/:id', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            id
        });
    }
    
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto 3000');
});