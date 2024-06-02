interface Task {
  item: string;
  id: number;
  completed: boolean;
}
// array to store tasks
let tasks: Task[] = [];

export default defineEventHandler(async (event) => {
  // get http method
  const method = event.node.req.method;
  // get the query parameters from event
  const { id } = getQuery(event);
  // convert string to integer base 10
  const numericId = parseInt(id as string, 10);
  // handle get request : return list of tasks
  if (method === "GET") {
    return tasks;
  }
  // handle post request : add new task to tasks
  if (method === "POST") {
    const body = await readBody(event);
    tasks.push(body);
    return body;
  }
  // handle delete request : delete task by id
  if (method === "DELETE") {
    tasks = tasks.filter((task) => task.id !== numericId);
    return { success: true };
  }
  // handle get request : update completion status of tasks
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
  // If  method not allowed, throw a 405 error
  throw createError({ statusCode: 405, statusMessage: "Method not allowed" });
});
