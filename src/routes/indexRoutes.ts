import {Router} from 'express';
import usuarios from './moduloTest/moduloTestRoutes';
const router = Router();

router.use('/modulotest', usuarios);
/*router.get('/users/:id', );
router.post('/users', );
router.put('/users', );
router.delete('/users', );
*/
export default router;