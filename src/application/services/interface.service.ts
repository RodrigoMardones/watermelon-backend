import Router from "koa-router";

export default interface Service{
    router: Router,
    route: string,
    getServices: Function,
}