const http = require('http');

// Request Listener passed (request, response) objects
// -The request listener (the arguement to createServer method)
//  is called for every response
// const request_listener = (req, res) => {
//   console.log(req);
// }

// const server = http.createServer(request_listener);
const server = http.createServer((req, res) => {
  console.log(req);
});
//=====================================
//=====================================
//=====================================
const port_num = 3e3;
server.listen(port_num, () => {
  console.log('http://localhost:3000/');
});
