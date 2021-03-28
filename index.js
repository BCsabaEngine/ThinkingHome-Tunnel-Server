const CreateServer = require('./lib/Server.js')

const server = CreateServer({
    max_tcp_sockets: 100,
    secure: false,
    domain: 'my.thinkinghome.hu',
});

server.listen(argv.port, argv.address, () => {
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
