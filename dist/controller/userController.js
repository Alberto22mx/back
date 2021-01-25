"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const test_1 = require("./../entity/test");
class UserController {
}
UserController.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield typeorm_1.getRepository(test_1.User).find();
        if (user.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro ningun registro'
            });
        }
        return res.json(user);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'error revisar consola del back'
        });
    }
});
UserController.post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = new test_1.User();
        users = req.body;
        const bolsaTrabajoRepository = typeorm_1.getRepository(test_1.User);
        yield bolsaTrabajoRepository.save(users);
        res.json(users);
    }
    catch (e) {
        res.status(500).send(e);
    }
    /*
    const userRepository = getRepository(User).create(req.body);
    const result = await getRepository(User).save(userRepository);
    return res.json(result);
    */
});
UserController.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield typeorm_1.getRepository(test_1.User).findOne(req.params.id);
        return res.json(user);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'error revisar consola del back'
        });
    }
});
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield typeorm_1.getRepository(test_1.User).findOne(req.params.id);
        if (user) {
            typeorm_1.getRepository(test_1.User).merge(user, req.body);
            const result = yield typeorm_1.getRepository(test_1.User).save(user);
            return res.json(result);
        }
        return res.json({ msg: 'Not User found' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'error revisar consola del back'
        });
    }
});
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield typeorm_1.getRepository(test_1.User).delete(req.params.id);
        return res.json(user);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'error revisar consola del back'
        });
    }
});
exports.default = UserController;
