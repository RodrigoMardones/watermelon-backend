import { Context } from 'koa';
import health from '../entities/health.entity';
export default class HealthUseCases {
    public static async healthbase(context: Context): Promise<void>{
        const response : health = {
            status : 'UP',
            timestamp: new Date().toISOString()
        }
        context.status = 200
        context.body = response
    }
}