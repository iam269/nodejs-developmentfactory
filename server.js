/* console.log(global.process.env); */

//create a simple server using http module

const http = require('http');
const db = require('./db').connect();

const host =  process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Home Page');
      break;
    case '/about':
      res.end('About Page');
      break;
    case '/contact':
      res.end('Contact Page');
      break;
    default:
      res.statusCode = 404;
      res.end('Page Not Found');
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});


//reading file using fs module

// const fs = require('fs');

// fs.readFile("test.txt", (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(data.toString());
// })

// fs.writeFile("test.txt", "Salutare din NodeJS!",{flag: "a"}, (error) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("File written successfully!");
// });

// fs.rename("test.txt", "node.txt", (error) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("File renamed successfully!");
// });

// fs.unlink("node.txt", (error) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("File deleted successfully!");
// });