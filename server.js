const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

