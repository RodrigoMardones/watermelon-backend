import Router from "koa-router";

export default interface InterfaceService{
    router: Router,
    route: string,
    getServices: Function,
}