const express = require('express');

const app = express();

// 前置的中间件一般都是用来做日志，跨域等
// function myLogger(req, res, next){
//   console.log('myLogger');
//   next();
// }

// app.use(myLogger);

app.get('/', function(req, res) {
  // res.send('hello node');
  throw new Error('error...');
});

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(400).json({
    error: -1,
    msg: err.toString()
  });
}
// 后置的中间件一般都是用来错误处理
app.use(errorHandler);

app.post('/user', function(req, res) {
  res.json('user...');
});

const server = app.listen(3000, function() {
  const { address, port } = server.address();
  console.log('Http Server is running on http://%s:%s', address, port);
});