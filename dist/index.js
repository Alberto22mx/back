"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const typeorm_1 = require("typeorm");
const app = express_1.default();
typeorm_1.createConnection();
// middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
// routes
app.use(indexRoutes_1.default);
app.listen(3000);
console.log('Server on port: ', 3000);
