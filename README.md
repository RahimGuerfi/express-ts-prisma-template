# 🚀 Express + TypeScript + Prisma Boilerplate

This is a simple and fully configured **Express + TypeScript** boilerplate template with **Prisma ORM** and **Zod** validation. It’s designed to speed up your development process by providing ready-to-use routes, validation schemas, and error handling. Perfect for building RESTful APIs with a clean architecture!

## Features
- 🔥 **Express** as the web framework.
- 📦 **TypeScript** for type safety and better development experience.
- 🧹 **Prisma ORM** for easy database interactions.
- 📜 **Zod** for runtime validation of request bodies, query parameters, and route params.
- 🔒 **Global Error Handler** for catching errors and returning consistent responses.

## 🔧 Getting Started

To get started with this template, follow the steps below:

### Prerequisites

Before running the template, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **pnpm** package manager

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/express-ts-prisma-template
cd express-ts-prisma-template
```

### Install Dependencies

Install the project dependencies using **pnpm**:

```bash
pnpm install
```

### Run the Project

Start the development server:

```bash
pnpm dev
```

The API should now be running at `http://localhost:3000`.

---

## 🛠 Folder Structure

```
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── app.ts                    # Main application entry point
│   ├── config
│   │   └── config.ts             # Configuration file (e.g., database)
│   ├── middlewares
│   │   └── global-error-handler.ts # Global error handler
│   ├── routes
│   │   ├── index.ts              # Base route definition
│   │   └── todos
│   │       ├── todos.controller.ts # Todos controller logic
│   │       ├── todos.route.ts    # Todos route definitions
│   │       ├── todos.service.ts  # Service logic for todos
│   │       ├── todos.ts          # In-memory data or DB model for todos
│   │       └── todos.types.ts    # Types related to todos
│   ├── schemas
│   │   └── todos.schema.ts       # Zod validation schemas for todos
│   └── utils
│       └── app-error.ts          # Custom error handling utility
└── tsconfig.json                 # TypeScript configuration file
```

---

## 🛣 Routes

Here’s a list of available routes:

- `GET /todos`: Get all todos.
- `GET /todos/:id`: Get a specific todo by ID.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update a todo by ID.
- `DELETE /todos/:id`: Delete a todo by ID.

---

## 💻 Usage Example

You can use the provided **TodosRoute** and **TodoController** to handle all routes for todos. Here's an overview of the available routes and the HTTP methods:

- `GET /todos`: Get all todos.
- `GET /todos/:id`: Get a todo by its ID.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update an existing todo by ID.
- `DELETE /todos/:id`: Delete a todo by ID.

---

## ⚡ Error Handling

The template includes a global error handler that automatically catches errors and formats them in a structured way. If a **Zod validation error** occurs, it will return a `400` status with the validation error messages. For other errors, a generic `500` error response is sent.

---

## 🛠️ Optional: Setting Up Prisma  

This template does **not** come with Prisma configured by default. If you want to use Prisma as your ORM, follow these steps:  

### 1️⃣ Initialize Prisma  
Run the following command to create the required files:  
```sh
npx prisma init
```  
This will generate:  
- A `prisma` folder with a `schema.prisma` file  
- A `.env` file for your database connection string  

### 2️⃣ Configure the Database  
Edit the `.env` file and set your database URL:  
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```  
Replace the placeholders with your actual database credentials.  

### 3️⃣ Define Your Data Model  
Modify `prisma/schema.prisma` to define your database models. Example:  
```prisma
model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```  

### 4️⃣ Run Migrations  
Apply your schema to the database:  
```sh
npx prisma migrate dev --name init
```  

### 5️⃣ Generate Prisma Client  
Run this command to generate the TypeScript client:  
```sh
npx prisma generate
```  

### 6️⃣ Use Prisma in Your Code  
Create a `prisma.ts` file inside `src/utils`:  
```ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
```
Then, use `prisma` inside your services, e.g., `todos.service.ts`:  
```ts
import { prisma } from '@/utils/prisma';

export class TodoService {
  static async getAllTodos() {
    return await prisma.todo.findMany();
  }
}
```  

Now you're ready to use Prisma in your project! 🚀

---

## 🔨 Running Tests

To run the tests, simply run:

```bash
pnpm test
```

You can also set up your preferred testing framework (e.g., Jest or Mocha) by modifying the test scripts.

---

## 📚 Documentation

For more detailed information on **Express**, **TypeScript**, **Prisma**, or **Zod**, refer to their respective documentation:

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/docs/)
- [Zod](https://zod.dev/)

---

## 🤝 Contributing

Feel free to fork the repo, open issues, and submit pull requests. If you have ideas to improve the boilerplate, don’t hesitate to contribute!

---

## 🎉 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
