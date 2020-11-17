const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
/////////////node.js 서버 사용하기 위해 

app.get('/api/customers',(req,res)=>{
    res.send([{
        'id' : 1,
        'img' : 'https://placeimg.com/64/64/1',
        'name' : 'yg', 
        'birthday' : '12334',
        'gender' : '남',
        'job': 'ㄷㄷㄷ'
      },
      {
        'id' : 2,
        'img' : 'https://placeimg.com/64/64/2',
        'name' : 'yddddddg',
        'birthday' : '12323334',
        'gender' : '남',
        'job': 'ㄷㄷ22332ㄷ'
      },
      {
        'id' : 3,
        'img' : 'https://placeimg.com/64/64/3',
        'name' : 'y6y7665g',
        'birthday' : '12334',
        'gender' : '남',
        'job': 'ㄷㄷㄷ44545'
      }
      ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`) );