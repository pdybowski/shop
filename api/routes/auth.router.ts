import express from 'express';
import { loginHandler, registerHandler } from '../controllers/auth.controller';
import { requireUser } from '../middleware/requireUser';
import validate  from '../middleware/validateResource';
import { createUserSchema, loginUserSchema } from '../schemaValidators/user.schema';

const router = express.Router();

// Register user route
// router.post('/register', registerHandler);
router.post('/register', validate(createUserSchema), registerHandler);

// Login user route
// router.post('/login', validate(loginUserSchema), loginHandler);
router.post('/login', loginHandler);

export default router;
