import Server from './infraestructure/server'

const port = 3000
const main = async () => {
    const server = Server.init(port);
    server.start();
}

main();