//PUERTO
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// CONEXION A LA BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeteria';
} else {
    urlDB = 'mongodb+srv://admin:aotqf86761@cluster0-e0vrc.mongodb.net/cafeteria';
}

process.env.URLDB = urlDB;