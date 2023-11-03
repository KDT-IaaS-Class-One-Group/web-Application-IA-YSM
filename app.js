const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const app = express();
const port = 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})