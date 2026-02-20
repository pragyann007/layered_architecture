"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./index");
const logger_1 = __importDefault(require("./logger"));
const connectDb = async () => {
    try {
        const url = index_1.configs.mongodb;
        if (!url)
            return;
        await mongoose_1.default.connect(url);
        logger_1.default.info("Mongo db connected sucess ");
    }
    catch (error) {
        logger_1.default.error("Mongo db connection error", error);
    }
};
exports.connectDb = connectDb;
