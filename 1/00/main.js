// > node main.js

console.log(`Whoa, I'm running JavaScript outside of the browser! :)`);

// We can actually access OS-specific stuff like the file-system!
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js!');
