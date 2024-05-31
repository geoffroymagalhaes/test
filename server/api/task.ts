// let tasks = [
//   { item: "Tâche 1", id: 1, completed: false },
//   { item: "Tâche 2", id: 2, completed: false },
// ];
import { ref } from "vue";
const tasks = ref();

export default defineEventHandler(async (event) => {
  const { taskList } = await useBody(event);
  tasks.value = taskList; // Assigning to the value property

  // Handle POST requests
  // const method = event.node.req.method;
  // if (method === "POST") {
  //   const body = await readBody(event);
  //   const newTask = { ...body, id: Date.now() };
  //   tasks.value.push(newTask);
  //   return newTask;
  // }

  return tasks.value; // Returning the value of the ref
});
