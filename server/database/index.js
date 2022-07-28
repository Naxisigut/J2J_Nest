const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '12348765',
  database: 'j2j'
})

module.exports = db