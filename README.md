# Node.js Development Factory - Simple HTTP Server

This project is part of a Node.js tutorial series covering fundamental concepts for building web applications. It implements a basic REST API server that demonstrates HTTP server creation, file operations, routing, and module usage.

## Tutorial Modules Covered

This project incorporates concepts from the following tutorial videos:

1. **Introduction.mp4** - Introduction to Node.js
2. **Installation.mp4** - Node.js installation
3. **Node Context.mp4** - Understanding Node.js context
4. **Creating Web Server.mp4** - Creating a web server
5. **Reading and Writing Text Files.mp4** - Reading and writing text files
6. **Server Routing.mp4** - Server routing
7. **Debugging in VSCode.mp4** - Debugging in VSCode
8. **Creating and Exporting Modules.mp4** - Creating and exporting modules
9. **NPM Packages and Installing Nodemon.mp4** - NPM packages and installing nodemon
10. **package.json and Using Nodemon.mp4** - package.json and using nodemon
11. **Mini-Project - REST API.mp4** - Mini-project - REST API

For the complete course and additional resources, visit: [Fundamentele Node.js](https://learn.developmentfactory.ro/view/courses/fundamentele-nodejs)

This project is a basic HTTP server built with Node.js using the built-in `http` module. It demonstrates fundamental server-side concepts including routing, file reading, and error handling.

## Features

- **Root Endpoint (`/`)**: Returns a welcome message with plain text content type.
- **Person Endpoint (`/person`)**: 
  - Supports GET requests to retrieve data from `db.json`.
  - Returns JSON data on success.
  - Handles file read errors with a 500 status code.
  - Responds with 405 Method Not Allowed for non-GET requests.
- **404 Handling**: Any unmatched URLs return a "Page Not Found" message with 404 status code.
- **Environment Configuration**: Server host and port can be configured via environment variables (`HOST` and `PORT`), defaulting to `localhost:3000`.

## Project Structure

- `server.js`: Main server file containing the HTTP server logic.
- `db.js`: Database connection module (imported but not actively used in routing).
- `db.json`: JSON file containing person data.
- `package.json`: Node.js project configuration.

## Usage

1. Install dependencies (if any):
   ```
   npm install
   ```

2. Start the server:
   ```
   node server.js
   ```

3. The server will run at `http://localhost:3000` (or configured host/port).

## API Endpoints

- `GET /`: Welcome message
- `GET /person`: Retrieve person data from db.json
- Any other request: 404 Not Found

## Error Handling

- File read errors are caught and return a 500 Internal Server Error.
- Unsupported HTTP methods on `/person` return 405 Method Not Allowed.
- Unmatched routes return 404 Not Found with appropriate content type headers.

## Technologies Used

- Node.js
- Built-in `http` module for server creation
- Built-in `fs` module for file operations