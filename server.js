const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
/////////////node.js 서버 사용하기 위해 

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})

connection.connect();

app.get('/api/customers',(req,res)=>{
    connection.query(
      "select * from customer",
      (err,rows,fields) => {
          res.send(rows);
      }
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`) );