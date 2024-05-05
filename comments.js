// Create web server

// Import the http module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server using the http module
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code of 200 (OK)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send a response back to the client
  res.end('Hello, world! This is a simple web server created with Node.js.');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

