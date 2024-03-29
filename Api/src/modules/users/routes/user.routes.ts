import { Router } from 'express';
import UsersController from '../controllers/UserController';

const userRouter = Router();
const usersController = new UsersController();

userRouter.post('/', usersController.create);

export default userRouter;
