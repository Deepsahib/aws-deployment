import http from 'node:http';

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end('hello world');
});

server.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
