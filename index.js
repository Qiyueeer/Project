const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;


const server = http.createServer((req, res) => {
  
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
 
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});


server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
