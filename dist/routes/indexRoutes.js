"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moduloTestRoutes_1 = __importDefault(require("./moduloTest/moduloTestRoutes"));
const router = express_1.Router();
router.use('/modulotest', moduloTestRoutes_1.default);
/*router.get('/users/:id', );
router.post('/users', );
router.put('/users', );
router.delete('/users', );
*/
exports.default = router;
