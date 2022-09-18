const net = require('net');
const port = Number(process.argv[2]);

const zerofill = function (i) {
    return (i < 10 ? '0' : '') + i;
};

const server = net.createServer(function listener(socket) {
    const date = new Date();

    const year = date.getFullYear();
    const month = zerofill(date.getMonth() + 1);
    const day = zerofill(date.getDate());
    const hour = zerofill(date.getHours());
    const minutes = zerofill(date.getMinutes());

    socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`);
});

server.listen(port);
