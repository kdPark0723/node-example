const fs = require('fs');
const url = require('url');

function requestListener(request, response) {
  let pathname = url.parse(request.url).pathname;
  if (pathname ==="/") pathname = "/index.html";

  const client = request.socket.address();

  console.log(`[${client.address}:${client.port}]: Request Get ${pathname}.`);

  const fileSteam = fs.createReadStream(`./${pathname}`);
  fileSteam.on('error', () => {
    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.end('<h1>Not Found</h1>');
  });

  fileSteam.pipe(response);
}

module.exports = requestListener;
