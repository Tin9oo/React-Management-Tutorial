import React, { useState, useEffect } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'
import { createTheme } from '@mui/material';

const theme = createTheme();

function App() {

  const [customers, setCustomers] = useState("");
  // state = {
  //   customers: ""
  // }

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('/api/customers');
      const body = await response.json();
      return body;
    };

    callApi()
      .then(res => setCustomers(res))
      .catch(err => console.log(err));
  }, []);

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({customers: res}))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/customers');
  //   const body = await response.json();
  //   return body;
  // }

  return (
    <Paper sx={{width: '100%', marginTop:theme.spacing(3), overflowX: "auto"}}>
      <Table sx={{minWidth:1080}}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // this.state.customers ? this.state.customers.map(c => {
            customers ? customers.map(c => {
              return (
                <Customer
                  key={c.id} // map은 키 값이 필요한데, 컴포넌트 내부에 넣는게 특이하다. 컴포넌트를 구분하는 용도인듯.
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )
            }) : ""
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

// export default withStyles(styles)(App);
export default App;
