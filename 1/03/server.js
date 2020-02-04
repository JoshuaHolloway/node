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
    res.write('<form action="/PATH_to_POST_message_to" method="POST">');
    res.write('<input type="text" name="josh_form_input_name"');
    res.write('</input>');
    res.write('<button type="submit">');
    res.write('SEND');
    res.write('</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/PATH_to_POST_message_to' && method === 'POST') {

    // -Register an EVENT-LISTENER on the request
    // -req.on allows us to listen to events
    // -We want to listen for the DATA-event
    // -The data event is fired every time a new chunk is ready to be read
    // -This is like a BUFFER
    // -The listener receives a CHUNK of data
    // -We specify a function to run for every data-event and pass it the chunk
    // -We will read the chunks into an array we call body (we are reading the request-body)
    const body = [];
    req.on('data', chunk => {
      console.log('--------------');
      console.log('Inside handler for data-event');
      console.log(chunk);
      console.log('^^^^^^^^^^^^^^');
      body.push(chunk);
    });

    // -Register another event-listener
    // -Listen for the END-event
    // -end-event occurs when we are done parsing the incoming data-stream (or the incoming request in general)
    // -In the fired function we can now rely on all the chunks being read in (stored in body array).
    // -To interact with the chunks we need to BUFFER them.
    req.on('end', () => {

      // Concatenate all the chunks in the body-array (buffering)
      const parsedBody = Buffer.concat(body).toString();
      console.log('--------------');
      console.log('Inside handler for end-event');
      console.log(parsedBody);
      console.log('^^^^^^^^^^^^^^');

      // parsedBody is key=value from form (name: value)
      const form_key_value_pair = parsedBody;

      // Split on equal sign into two array elements
      const form_key_value_split = form_key_value_pair.split('=');
      console.log(form_key_value_split);

      const form_key = form_key_value_split[0];
      const form_value = form_key_value_split[1];
      console.log('form value: ' + form_value);

      // Extract the message from the form:
      //const message = key_value_pair.split('=')[1]; // split array on = sign and take right side (1th-element)
      const message = form_value;

      // Write the form-data into a file:
      fs.writeFileSync('message.txt', message);
    });

    // redirect user to /
    res.statusCode = 302; // redirection code
    res.setHeader('Location', '/');
    return res.end();
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
