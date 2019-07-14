import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.statis('dist'));


app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/* eslint-disable no-console */
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
