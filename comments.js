// Create web server
// 1. Create a web server
// 2. Handle requests to the server
// 3. Create a response to the request
// 4. Send the response to the client
// 5. Start the server
// 6. Listen for requests

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        fs.readFile('filename.txt', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('File not found');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(data);
                res.end();
            }
        });
    }
});
