function requestListener(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello, world!</h1>');
}

module.exports = requestListener;
