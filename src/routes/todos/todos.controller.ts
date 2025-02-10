import { Request, Response } from 'express';
import { TodoService } from './todos.service';
import {
  createTodoBodySchema,
  deleteTodoParamsSchema,
  getTodoParamsSchema,
  updateTodoBodySchema,
  updateTodoParamsSchema,
} from '@/schemas/todos.schema';

export class TodoController {
  static getAllTodos(req: Request, res: Response) {
    const todos = TodoService.getAllTodos();
    res.status(200).json(todos);
  }

  static getTodo(req: Request, res: Response) {
    const params = getTodoParamsSchema.parse(req.params);

    const todo = TodoService.getTodo(params);

    res.status(200).json(todo);
  }

  static createTodo(req: Request, res: Response) {
    const { title, completed } = createTodoBodySchema.parse(req.body);

    const newTodo = TodoService.createTodo({ title, completed });

    res.status(201).json(newTodo);
  }

  static updateTodo(req: Request, res: Response) {
    const params = updateTodoParamsSchema.parse(req.params);
    const body = updateTodoBodySchema.parse(req.body);

    const updatedTodo = TodoService.updateTodo(params, body);

    res.json(updatedTodo);
  }

  static deleteTodo(req: Request, res: Response) {
    const params = deleteTodoParamsSchema.parse(req.params);

    const deletedTodo = TodoService.deleteTodo(params);

    res.status(200).json(deletedTodo);
  }
}
