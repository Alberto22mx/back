import { Router } from "express";
import usuarios from './users/usersRoutes';
const router = Router();

router.use('/clientes', usuarios);

export default  router;