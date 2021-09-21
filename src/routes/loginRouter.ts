import Router from 'express';
import { signIn, signUp } from '../controllers/loginController';

const router = Router();

router.get('/',signIn);
router.get('/signup',signUp);


export default router;