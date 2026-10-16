require('dotenv').config();
const pool = require('../config/db');
const createSchema = require('./create-schema');

createSchema()
    .then(() => console.log('Tabla "productos" creada ✅'))
    .catch((err) => console.error('Error al crear la tabla ❌', err.message))
    .finally(() => pool.end());
