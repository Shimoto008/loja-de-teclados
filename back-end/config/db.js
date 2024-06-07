const mysql = require ("mysql2")

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hashim0to08!',
  database: 'forms'
});

db.connect((err) => {
  if(err){
    console.error('erro ao conectar ao banco de dados', err)
    return
  }
  console.log('conectado ao banco de dados mySQL')
})

module.exports = db;
