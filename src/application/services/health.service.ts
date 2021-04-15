import Router, { IMiddleware } from 'koa-router';
import HealthController from '../controllers/health.controller';
import Service from './interface.service';

class HealthService implements Service{
    public router: Router;
    public route: string  = '/health'
    constructor(){
        this.router = new Router();
        this.registerServices();
    }
    registerServices():void{
        this.router.get(this.route, HealthController.get)
    }
    public getServices(): IMiddleware{
        return this.router.routes();
    }
}

export default new HealthService();