const express = require('express');
const bodyParser = require('body-parser');
const routesC = require('./routes');
const path = require('path');
const app = express();
const port = 5050;

const { dataJsonS } = require('./routes')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/submit', dataJsonS);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})