const expressJwt = require('express-jwt');
const { PRIVATE_KEY } = require( '../utils/constant.js');

module.exports = expressJwt({
  secret: PRIVATE_KEY,
  credentialsRequired: true
}).unless({
  path: [
    '/',
    '/user/login'
  ],  // 设置 jwt 认证白名单
});