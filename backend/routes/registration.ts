import express from 'express';
import { auth } from '../middlewares/auth';
import * as registrationController from '../Controllers/registrationController';

const router = express.Router();

router.post('/:eventId', auth, registrationController.registerForEvent);
router.delete('/:eventId', auth, registrationController.cancelRegistration);

export default router;