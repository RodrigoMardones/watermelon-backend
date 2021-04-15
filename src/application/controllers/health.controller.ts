import { Context } from 'koa';
import Controller from './interface.controller';
import HealthUseCases from '../../domain/usecases/health.usecase';

export default class HealthController implements Controller{
    public static async get(context: Context): Promise<void>{
        await HealthUseCases.healthbase(context);
    }
}