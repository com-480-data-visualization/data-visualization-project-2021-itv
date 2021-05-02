const express = require('express')
const mysql = require('mysql')
const app = express()
const config = require('./config.js')
const port = 3000

let connection = null;

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)

   // Connect to database
   connection = mysql.createConnection({
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
   })
   connection.connect(err => {
      if (err) {
         console.log('Error while connecting to database. Exiting…')
         console.log(err.sqlMessage)
         process.exit(1)
      }
      console.log('Database connected!')
   })
})
