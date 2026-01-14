import express from 'express'
import { users } from '../controllers/users.js'
import { checkSession } from '../middlewares/checkSession.js';

const router = express.Router();

router.get('/', checkSession, users)


export default router;