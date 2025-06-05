const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath);

  let contentType = 'text/html';

  // Set content type based on file extension
  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
  }

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err404, data404) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data404);
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
