import { Context } from 'koa';
import Controller from '../controllers/interface.controller';

export default class UserController implements Controller{
    public static async post(context: Context): Promise<void>{
        context.status = 200;
        context.body = context.request.body;
    }
}