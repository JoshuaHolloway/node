const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  // At specific route load a page where the user can enter data which is stored in a file on the server
  if (url === '/') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('Hello');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    // response that holds html that gives user input form
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message"');
    res.write('</input>');
    res.write('<button type="submit">');
    res.write('SEND');
    res.write('</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    // button that sends a new POST request

    return res.end();
  } else {
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
  }
});
//=====================================
//=====================================
//=====================================
server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
