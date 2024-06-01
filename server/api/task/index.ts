interface Task {
  item: string;
  id: number;
  completed: boolean;
}

let tasks: Task[] = [];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const { id } = getQuery(event);

  if (method === "GET") {
    return tasks;
  }
  if (method === "POST") {
    const body = await readBody(event);
    tasks.push(body);
    return body;
  }
  if (method === "DELETE") {
    tasks = tasks.filter((task) => task.id !== id);
  }
  if (method === "PATCH") {
    const todo = tasks.find((task) => task.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
});
