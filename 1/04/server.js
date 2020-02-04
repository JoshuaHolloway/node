const http = require('http');
const fs = require('fs');
//===========================
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('Hello');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="josh_input_name"');
    res.write('</input>');
    res.write('<button type="submit">');
    res.write('SEND');
    res.write('</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    // -If we enter the if statement we register the callback on chunks (above)
    // -Then we register the callback for the end-event
    // -And then we immediately return from callback in the createServer() method call on the http object.
    // -This ensures the code in the block below the if(url,method) does not run.
    // -We only want to run it if we don't go into the if statement
    // -Can't we just use an else statement then?
    // -In fact, we can't simultaneously have a request with url==/ and url==/message,
    //  so shouldn't these three blocks be if, if else, else?
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);

      // redirect user to /
      res.statusCode = 302; // redirection code
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>');
    res.write('HELLO');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
});
//===========================
server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
//===========================
