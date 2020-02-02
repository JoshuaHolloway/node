const fs = require('fs');

const requestHandler = (req, res) => {
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
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const message = parsedBody.split('=')[1];
      //fs.writeFileSync('message.txt', message);
      fs.writeFile('message.txt', message, err => {
        // send request only when done working with file
        res.statusCode = 302; // redirection status-code
        res.setHeader('Location', '/'); // redirect user to /
        return res.end();
      });
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
};

// module.exports = requestHandler;
module.exports = {
  handler: requestHandler,
  josh: 'I am josh!'
};
