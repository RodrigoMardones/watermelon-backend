import { Context } from 'koa';
import Router from 'koa-router';
class HealthService{
    private router: Router;
    constructor(){
        this.router = new Router();
    }
    health(ctx: Context):void{
        ctx.status = 200;
        ctx.body = {
            status : 'UP',
            timestamp: new Date().toISOString()
        }
    }
}

export default new HealthService()