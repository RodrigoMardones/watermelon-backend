import {Context} from 'koa';

export default class ErrorHandler extends Error{
    public httpCode: number;
    public message: string;
    constructor(context: Context, httpCode: number, message:string){
        super();
        this.httpCode = httpCode;
        this.message = message;
    }
}