"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.configs = {
    node_env: "development",
    port: Number(process.env.PORT) || 3000,
    mongodb: process.env.MONGO_URI,
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    },
    api: {
        prefix: "/api",
        version: "/v1",
    }
};
