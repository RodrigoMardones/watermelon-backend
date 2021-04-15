import { Context } from 'koa';
import healthInterface from '../../domain/entities/health.entity'
import InterfaceController from './interface.controller';

export default class HealthController implements InterfaceController{
    public static async get(ctx: Context): Promise<void>{
        ctx.status = 200
        const result : healthInterface = {
            status : 'UP',
            timestamp: new Date().toISOString()
        } 
        ctx.body = result;
    }
}