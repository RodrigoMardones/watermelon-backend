import Router, { IMiddleware } from "koa-router";

export default interface Service{
    router: Router,
    route: string,
    getServices: () => IMiddleware,
    registerServices: () => void

}