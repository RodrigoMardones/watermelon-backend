import RedisObject from '../infraestructure/database/object';
import Database from '../infraestructure/database/database';
import jwt from 'jsonwebtoken';

export default class UserRepository extends RedisObject{
    public username: string;
    public password: any;
    constructor(username:string, password:string){
        super();
        this.username = username;
        this.password = jwt.sign(password,'test',{expiresIn:'2m'});
    }

    public toJson(){
        return {
            id:this.id,
            username:this.username,
            password:this.password
        }
    }
    public find(name:string){
        const dbinstance = Database.init(6789,'try');
        //find here
    }
}