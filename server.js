/* console.log(global.process.env); */

const http = require('http');

const host =  process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});