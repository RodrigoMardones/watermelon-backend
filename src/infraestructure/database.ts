import {Tedis} from 'tedis';

export default class Database{
    private connection: Tedis;
    constructor(port: number, password:string){
        this.connection = new Tedis({
            port: port,
            password: password
        })
    }
    
}