const http = require('http');

const server = http.createServer((req, res) => {
  console.log('----------------------------');
  console.log('----------------------------');
  console.log('----------------------------');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log('----------------------------');
  // Hard-Exit:
  // -unregister the request-listener => End Node's event loop
  //process.exit();

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>HELLO JOSH!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end(); // send back to client
});
//=====================================
//=====================================
//=====================================
server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
