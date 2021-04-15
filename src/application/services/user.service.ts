import Router, { IMiddleware } from 'koa-router'
import Service from './interface.service'
import UserController from '../controllers/user.controller'
export default new class UserService implements Service{
    public router: Router;
    public route : string = '/user';
    constructor(){
        this.router = new Router();
        this.registerServices();
    }
    registerServices():void{
        this.router.post(this.route, UserController.post )
    }
    getServices():IMiddleware{
        return this.router.routes();
    }
}   