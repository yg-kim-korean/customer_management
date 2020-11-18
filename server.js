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

const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/customers',(req,res)=>{
    connection.query(
      "select * from customer where isDeleted = 0",
      (err,rows,fields) => {
          res.send(rows);
      }
    )
})

app.use('/image',express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req,res)=>{
  let sql = 'INSERT INTO customer VALUES (NULL, ?,?,?,?,?,now(),0)';
  let image = '/image/' + req.file.filename;
  let NAME =  req.body.NAME;
  let birthday =  req.body.birthday;
  let gender =  req.body.gender;
  let job =  req.body.job;
  let params = [image,NAME,birthday,gender,job]
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    }
  );
});

app.delete('/api/customers/:id', (req,res)=>{
  let sql = 'update customer set isDeleted = 1 where id = ?';
  let params = [req.params.id];
  console.log(params)
  connection.query(sql, params,
    (err,rows,fields  ) =>{
      res.send(rows);
    }
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`) );