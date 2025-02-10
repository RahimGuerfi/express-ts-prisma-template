import { z } from 'zod';

export const createTodoBodySchema = z.object({
  title: z.string().min(1).max(100),
  completed: z.boolean(),
});

export const updateTodoBodySchema = createTodoBodySchema.partial();

const idSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const updateTodoParamsSchema = idSchema;
export const deleteTodoParamsSchema = idSchema;
export const getTodoParamsSchema = idSchema;

export type TCreateTodoBody = z.infer<typeof createTodoBodySchema>;
export type TUpdateTodoBody = z.infer<typeof updateTodoBodySchema>;
export type TUpdateTodoParams = z.infer<typeof updateTodoParamsSchema>;
export type TDeleteTodoParams = z.infer<typeof deleteTodoParamsSchema>;
export type TGetTodoParams = z.infer<typeof getTodoParamsSchema>;
