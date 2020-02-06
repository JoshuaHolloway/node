const http = require('http');
const routes = require('./routes.js');
//===========================
console.log(routes.josh);
const server = http.createServer(routes.handler);
//===========================
server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
//===========================
