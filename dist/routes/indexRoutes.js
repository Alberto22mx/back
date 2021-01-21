"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const userController_1 = require("../controller/userController");
router.get('/users', userController_1.getUsers);
/*router.get('/users/:id', );
router.post('/users', );
router.put('/users', );
router.delete('/users', );
*/
exports.default = router;
