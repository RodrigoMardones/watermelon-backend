import Server from './infraestructure/server'
import EnvironmentManager from './infraestructure/EnvironmentManager'

const main = async () => {

    const environment = new EnvironmentManager('development');
    const secrets = environment.getEnv();
    const server = Server.init(secrets.PORT);
    server.start();
}

main();