interface Task {
  item: string;
  id: number;
  completed: boolean;
}

let tasks: Task[] = [];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const { id } = getQuery(event);

  const numericId = parseInt(id as string, 10);

  if (method === "GET") {
    return tasks;
  }

  if (method === "POST") {
    const body = await readBody(event);
    tasks.push(body);
    return body;
  }

  if (method === "DELETE") {
    tasks = tasks.filter((task) => task.id !== numericId);
    return { success: true };
  }

  if (method === "PATCH") {
    const todo = tasks.find((task) => task.id === numericId);
    if (todo) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: "Task not found",
      });
    }
  }

  throw createError({ statusCode: 405, statusMessage: "Method not allowed" });
});
