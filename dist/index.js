"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./infraestructure/server"));
const port = 3000;
const main = async () => {
    const server = server_1.default.init(port);
    server.start();
};
main();
