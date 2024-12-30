import express from 'express';
import * as authController from '../Controllers/authController';

const router = express.Router();

router.post('/register', authController.signin);
router.post('/login', authController.login);

export default router;

