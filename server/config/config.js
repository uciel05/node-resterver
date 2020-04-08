//========
// Puerto
//========
process.env.PORT = process.env.PORT || 3000;

//========
// Entorno
//========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========
// Vencimiento de Token
//========
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//========
// SEEd de autenticacion
//========
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';



//========
// Base de datos
//========
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://uciel05:hIxmmUjvNiWbVssY@cluster0-kqfij.mongodb.net/test';
}

process.env.URLDB = urlDB;