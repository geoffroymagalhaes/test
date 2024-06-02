import { defineStore } from "pinia";

interface Task {
  item: string;
  id: number;
  completed: boolean;
}
// define pinia store
export const useTaskListStore = defineStore("taskList", {
  // state function return initial state
  state: () => ({
    taskList: [] as Task[],
    id: 0,
  }),

  actions: {
    // Fetch tasks from the API and update the task list
    async fetchTasks() {
      const response = await $fetch(`/api/task`);
      this.taskList = response;
    },
    // Add a new task to the list
    async addTask(item: string) {
      const newtask = await $fetch(`/api/task`, {
        method: "POST",
        body: { item, id: this.id++, completed: false },
      });
      this.taskList.push(newtask);
    },
    // Delete task from the list by ID
    async deleteTask(id: number) {
      await $fetch(`/api/task?id=${id}`, {
        method: "DELETE",
      });
      this.taskList = this.taskList.filter((task) => task.id !== id);
    },
    // Toggle completion status  task by  ID
    async toggleTask(id: number) {
      const updatedTask = await $fetch(`/api/task?id=${id}`, {
        method: "PATCH",
      });
      const taskIndex = this.taskList.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        this.taskList[taskIndex] = updatedTask;
      }
    },
  },
});
