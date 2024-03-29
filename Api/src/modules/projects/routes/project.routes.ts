import { Router } from 'express';

import ProjectController from '../controllers/ProjectController';
import TaskController from '../controllers/TaskController';

const projectRouter = Router();
const projectController = new ProjectController();
const taskController = new TaskController();

projectRouter.post('/', projectController.create);
projectRouter.get('/', projectController.index);

projectRouter.post('/tasks/:project_id', taskController.create);
projectRouter.get('/tasks/:project_id', taskController.index);
projectRouter.put('/tasks/:task_id', taskController.update);

export default projectRouter;
