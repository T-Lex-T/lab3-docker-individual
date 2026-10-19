const http = require('http');

const HOST = '0.0.0.0';
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<!DOCTYPE html><html><head><title>Primul meu server Docker!</title></head><body><h1>Primul meu server Docker!</h1><p>Serverul Node.js functioneaza in container.</p></body></html>');
});

server.listen(PORT, HOST, () => {
  console.log(`Serverul ruleaza pe portul ${PORT}`);
});
