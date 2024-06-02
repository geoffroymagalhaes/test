import { defineStore } from "pinia";

interface Task {
  item: string;
  id: number;
  completed: boolean;
}

export const useTaskListStore = defineStore("taskList", {
  state: () => ({
    taskList: [] as Task[],
    id: 0,
  }),

  actions: {
    async fetchTasks() {
      const response = await $fetch(`/api/task`);
      this.taskList = response;
    },

    async addTask(item: string) {
      const newtask = await $fetch(`/api/task`, {
        method: "POST",
        body: { item, id: this.id++, completed: false },
      });
      this.taskList.push(newtask);
    },

    async deleteTask(id: number) {
      await $fetch(`/api/task?id=${id}`, {
        method: "DELETE",
      });
      this.taskList = this.taskList.filter((task) => task.id !== id);
    },

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
