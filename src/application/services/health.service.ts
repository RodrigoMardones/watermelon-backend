import Router, { IMiddleware } from 'koa-router';
import HealthController from '../controllers/health.controller';
import InterfaceService from './interface.service';

class HealthService implements InterfaceService{
    public router: Router;
    public route: string  = '/health'
    constructor(){
        this.router = new Router();
        this.health();
    }
    private health():void{
        this.router.get(this.route, HealthController.get)
    }
    public getServices(): IMiddleware{
        return this.router.routes();
    }
}

export default new HealthService();