/* console.log(global.process.env); */

//create a simple server using http module

const http = require("http");
const fs = require("fs");
const db = require("./db").connect();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/plain");
      res.end("Welcome to my node API");
      break;
    case "/person":
      res.setHeader("Content-Type", "application/json");
      if (req.method === "POST") {
        res.statusCode = 201;
        fs.readFile("db.json", (error, data) => {
          if (error) {
            res.statusCode = 500;
            res.end("Server Error");
            return;
          }
          const person = JSON.parse(data.toString());
          req.on("data", (chunk) => {
            const json = JSON.parse(chunk.toString());
            person.push(json);
            const allPeople = JSON.stringify(person);
            fs.writeFile("db.json", allPeople, (error) => {
              if (error) {
                res.statusCode = 500;
                res.end("Server Error");
                return;
              }
            });
          });
          res.end();
        });
      } else {
        res.statusCode = 405;
        res.end("Method Not Allowed");
      }
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Page Not Found");
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
