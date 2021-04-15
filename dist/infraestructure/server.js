"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
class Server {
    constructor(port) {
        this.port = port;
        this.app = new koa_1.default();
    }
    static init(port) {
        if (!this.instance) {
            this.instance = new Server(port);
            return this.instance;
        }
        else {
            return this.instance;
        }
    }
    middlewares() {
    }
    services() {
    }
    start() {
        this.middlewares();
        this.services();
        this.app.listen(this.port, () => console.log("iniciando servidor"));
    }
}
exports.default = Server;
