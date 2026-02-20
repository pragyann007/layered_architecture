"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
const db_1 = require("./config/db");
const logger_1 = __importDefault(require("./config/logger"));
const runServer = () => {
    (0, db_1.connectDb)();
    app_1.app.listen(config_1.configs.port, () => {
        logger_1.default.info(`server is running at port ${config_1.configs.port}`);
    });
};
runServer();
