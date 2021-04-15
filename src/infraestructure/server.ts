import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import { HealthService, UserService } from '../application/services/services';

export default class Server{
    private app: Koa;
    private port: number;
    private static instance: Server;

    constructor(port:number){
        this.port = port;
        this.app = new Koa();
    }
    public static init(port: number): Server{
        if(!this.instance){
            this.instance = new Server(port);
            return this.instance;
        }else{
            return this.instance;
        }
    }
    private middlewares(): void{
        this.app.use(bodyparser());
    }
    private services(): void{
        this.app.use(HealthService.getServices());
        this.app.use(UserService.getServices());
    }
    start(){
        this.middlewares();
        this.services();
        this.app.listen(this.port, () => console.log(`iniciando servicio en puerto: ${this.port}`));
    }
}