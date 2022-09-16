const net = require('net');
const port = Number(process.argv[2]);

const zeroFill = function (i) {
    return (i < 10 ? '0' : '') + i;
};

const server = net.createServer(function listener(socket) {
    const date = new Date();

    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1);
    const day = zeroFill(date.getDate());
    const hour = zeroFill(date.getHours());
    const minutes = zeroFill(date.getMinutes());

    socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`);
});

server.listen(port);
