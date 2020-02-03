const http = require('http');

// -The response listener (the arguement to createServer method)
//  is called for every response
const server = http.createServer((req, res) => {
  console.log(req);
});
//=====================================
//=====================================
//=====================================
server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
