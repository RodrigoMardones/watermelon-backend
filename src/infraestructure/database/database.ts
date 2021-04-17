import {Tedis} from 'tedis';
import RedisObject from './object';

export default class Database{
    private connection: Tedis;
    constructor(port: number, password:string){
        this.connection = new Tedis({
            port,
            password,
        })
    }

    public async add(document:RedisObject):Promise<RedisObject | void>{
        try {
            const response = await this.connection.hmset(document.id, document.toJson())
            if(response){
                return document;
            }
        }catch(e){
        }
    }
    public async get(id:string):Promise<any>{
        try{
            return await this.connection.hgetall(id);
        }catch(e){

        }
    }
}