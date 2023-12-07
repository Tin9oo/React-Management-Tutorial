import React from 'react';
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

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/1/64/64',
    'name': '김주환',
    'birthday': '990601',
    'gender': 'Male',
    'job': 'Under graduate'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/2/64/64',
    'name': '홍길동',
    'birthday': '000000',
    'gender': 'Male',
    'job': '의적'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/3/64/64',
    'name': '이순신',
    'birthday': '000001',
    'gender': 'Male',
    'job': '해군'
  }
]

function App() {
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
            customers.map(c => {
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
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

// export default withStyles(styles)(App);
export default App;
