const fs = require('fs');
const path = require('path');
const pool = require('../config/db');

const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

module.exports = () => pool.query(sql);
