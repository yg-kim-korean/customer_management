import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [{
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
]

class App extends Component{
  render(){
    return (
      <div>
          {/* <Customer 
            name = {customers[0].name}
            birthday={customers[0].birthday}
            gender = {customers[0].gender}
            job={customers[0].job}
            id = {customers[0].id}
            img = {customers[0].img}
          />
          <Customer 
            name = {customers[1].name}
            birthday={customers[1].birthday}
            gender = {customers[1].gender}
            job={customers[1].job}
            id = {customers[1].id}
            img = {customers[1].img}
          />
          <Customer 
            name = {customers[2].name}
            birthday={customers[2].birthday}
            gender = {customers[2].gender}
            job={customers[2].job}
            id = {customers[2].id}
            img = {customers[2].img}
          /> */}
          {
            customers.map(c =>{
                return(
                    <Customer 
                      key={c.id}
                      name = {c.name}
                      birthday={c.birthday}
                      gender = {c.gender}
                      job={c.job}
                      id = {c.id}
                      img = {c.img}
                      />
              );
            })
          }
      </div>
    );
  }
}

export default App;
