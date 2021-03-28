const CreateServer = require('./lib/Server.js')

const config = require('./config.js');

const server = CreateServer({
    max_tcp_sockets: config.net.maxsocket,
    secure: config.net.secure,
    domain: config.net.domain,
});

server.listen(config.net.port, config.net.host, () => {
    console.debug('server listening on port: %d', server.address().port);
});

process.on('SIGINT', () => {
    process.exit();
});

process.on('SIGTERM', () => {
    process.exit();
});

process.on('uncaughtException', (err) => {
    console.error(err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error(reason);
});
