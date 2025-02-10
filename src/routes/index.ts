import { Router } from 'express';
import TodosRoute from './todos/todos.route';

const router = Router();

router.use('/todos', TodosRoute);

export default router;
