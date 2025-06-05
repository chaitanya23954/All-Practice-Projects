// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Set header for all responses
  res.setHeader('Content-Type', 'application/json');

  // Route: GET /api/user
  if (req.url === '/api/user' && req.method === 'GET') {
    const data = { id: 1, name: 'John Doe' }; // sample data
    res.writeHead(200); // success
    res.end(JSON.stringify(data));
  }

  // Route: POST /api/user
  else if (req.url === '/api/user' && req.method === 'POST') {
    let body = '';

    // collect chunks of data
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // when data is fully received
    req.on('end', () => {
      const parsed = JSON.parse(body); // parse JSON input
      res.writeHead(201); // created
      res.end(JSON.stringify({ message: 'User created', user: parsed }));
    });
  }

  // If route not matched
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
