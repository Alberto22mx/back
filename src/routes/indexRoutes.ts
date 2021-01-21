import {Router} from 'express';
const router = Router();

import {getUsers} from '../controller/userController';

router.get('/users', getUsers);
/*router.get('/users/:id', );
router.post('/users', );
router.put('/users', );
router.delete('/users', );
*/
export default router;