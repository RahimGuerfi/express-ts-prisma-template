import { Router } from 'express';
import { TodoController } from './todos.controller';

const TodosRoute = Router();

TodosRoute.get('/', TodoController.getAllTodos);
TodosRoute.get('/:id', TodoController.getTodo);
TodosRoute.post('/', TodoController.createTodo);
TodosRoute.put('/:id', TodoController.updateTodo);
TodosRoute.delete('/:id', TodoController.deleteTodo);

export default TodosRoute;
