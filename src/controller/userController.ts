import { Request, Response } from "express";
import {getRepository} from 'typeorm';
import {User} from './../entity/test';

class UserController {
    static getUsers = async (req: Request, res: Response) => {
        try {
            const user = await getRepository(User).find();
            if (user.length === 0) {
                return res.status(404).json({
                    ok: false,
                    msg: 'No se encontro ningun registro'
                });
            }
            return res.json(user);

        } catch (e) {
            console.log(e)
            return res.status(500).json({
                ok: false,
                msg: 'error revisar consola del back'
            });
        }
    }

    static post = async (req: Request, res: Response) => {
        try {
            let users = new User();
            users = req.body;
            const bolsaTrabajoRepository = getRepository(User);
            await bolsaTrabajoRepository.save(users)
            res.json(users);
        } catch (e) {
            res.status(500).send(e);
        }
        /*
        const userRepository = getRepository(User).create(req.body);
        const result = await getRepository(User).save(userRepository);
        return res.json(result);
        */
    }

    static getUserById = async (req: Request, res: Response) => {
        try {
            const user = await getRepository(User).findOne(req.params.id);
            return res.json(user);

        } catch (e) {
            console.log(e)
            return res.status(500).json({
                ok: false,
                msg: 'error revisar consola del back'
            });
        }
    }

    static updateUser = async (req: Request, res: Response) => {
        try {
            const user = await getRepository(User).findOne(req.params.id);
            if (user) {
                getRepository(User).merge(user, req.body);
                const result = await getRepository(User).save(user);
                return res.json(result);
            }
            return res.json({msg: 'Not User found'});
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                ok: false,
                msg: 'error revisar consola del back'
            });
        }
    }

    static deleteUser = async (req: Request, res: Response) => {
        try {
            const user = await getRepository(User).delete(req.params.id);
            return res.json(user);
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                ok: false,
                msg: 'error revisar consola del back'
            });
        }
    }
}

export default UserController