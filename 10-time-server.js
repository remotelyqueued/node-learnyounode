const net = require('net');
const port = process.argv[2];

const server = net.createServer(function listener(socket) {
    socket.write();
    socket.end();
});

server.listen(port);
