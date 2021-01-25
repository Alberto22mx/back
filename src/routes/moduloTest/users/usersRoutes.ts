import {Router} from "express";
import UserController from './../../../controller/userController';

const router = Router();

router.get('/users', UserController.getUsers);
router.post('/users', UserController.post);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
