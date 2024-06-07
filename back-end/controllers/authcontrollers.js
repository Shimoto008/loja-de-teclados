const bcrypt = require ('bcrypt')
const db = require ('../config/db')
const { MemoryLoadResultCache } = require('@angular-devkit/build-angular/src/tools/esbuild/load-result-cache')

exports.register = (req,res) =>{
  const {nome, celular, email, password} = req.body

  bcrypt.hash(password, 10, (err, _hash) =>{
    if(err){
      res.status(500).json({
        error: err})
        return;
    }
  })


  const query = 'INSERT INTO users (nome, celular, email, password) VALUES (?, ?, ?, ?)';

  db.query(query, [nome, celular, email, password], (err, res)=>{
    if(err){

      res.status(500).json({error: err})
      return
    }

    res.status(201).json({message: 'usuario registrado com sucesso'})
    return
  })
}

exports.login = (req, res) =>{

  const {email, password} = req.body

  const query = 'SELECT * FROM users WHERE email = ?'

  db.query(query, [email], (err, results) =>{
    if (err){
      res.status(500).json({error: err})
      return
    }
    if(res.length === 0){

      res.status(401).json({message: 'autentificação falhou'})
      return
    }

    const user = results[0]

    bcrypt.compare(password, user.password, (err, math) =>{
      if (err){
        res.status(500).json({error: err})
        return
      }

      if (math){
        res.status(200).json({message: 'autentificação bem-sucedida'})
      }else{
        res.status(401).json({message: 'autentificação falhou'})
      }
    })

  })
}

