import {
  TCreateTodoBody,
  TDeleteTodoParams,
  TGetTodoParams,
  TUpdateTodoBody,
  TUpdateTodoParams,
} from '@/schemas/todos.schema';
import { todos } from './todos';
import AppError from '@/utils/app-error';

let currentId = todos.length + 1;

export class TodoService {
  static getAllTodos() {
    return todos;
  }

  static getTodo({ id }: TGetTodoParams) {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new AppError('Todo not found', 404);
    }

    return todos[index];
  }

  static createTodo(data: TCreateTodoBody) {
    const newTodo = { id: currentId++, ...data };
    todos.push(newTodo);
    return newTodo;
  }

  static updateTodo({ id }: TUpdateTodoParams, data: TUpdateTodoBody) {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new AppError('Todo not found', 404);
    }

    todos[index] = { ...todos[index], ...data };
    return todos[index];
  }

  static deleteTodo({ id }: TDeleteTodoParams) {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new AppError('Todo not found', 404);
    }

    const deletedTodo = todos[index];

    todos.splice(index, 1);

    return deletedTodo;
  }
}
