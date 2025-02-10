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
git clone https://github.com/yourusername/express-ts-prisma-boilerplate.git
cd express-ts-prisma-boilerplate
```

### Install Dependencies

Install the project dependencies using **pnpm**:

```bash
pnpm install
```

### Set Up the Database

Make sure you configure your database connection in `src/config/config.ts` and apply the Prisma migrations:

```bash
pnpm prisma migrate dev
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
