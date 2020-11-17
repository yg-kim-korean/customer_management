import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width : '100',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  }
})
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
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
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
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>사진</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
          </TableBody>
          </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
