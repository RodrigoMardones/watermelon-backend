import { v4 as uuidv4 } from 'uuid';

export interface baseObject{
    id: string,
}

export default abstract class RedisObject implements baseObject{
    public id: string;
    constructor(){
        this.id = uuidv4();
    }

    public toJson(){
        return {
            id: this.id
        }
    }
}