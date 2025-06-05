const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/register' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { u_id, password } = JSON.parse(body);

      // Read existing users or create empty array
      let users = [];
      if (fs.existsSync('users.json')) {
        users = JSON.parse(fs.readFileSync('users.json'));
      }

      // Check if user exists
      if (users.find(user => user.u_id === u_id)) {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User already exists' }));
        return;
      }

      // Save user
      users.push({ u_id, password });
      fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User registered successfully' }));
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
