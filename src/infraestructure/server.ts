import Koa from 'koa';
import { HealthService } from '../application/services/services';

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
        this.app.use(HealthService.getServices());
    }
    private services(): void{
    }
    start(){
        this.middlewares();
        this.services();
        this.app.listen(this.port, () => console.log("iniciando servidor"));
    }
}