import { defineStore } from "pinia";

// Define the structure of a task item
interface Task {
  item: string;
  id: number;
  completed: boolean;
}

export const useTaskListStore = defineStore("taskList", {
  state: () => ({
    taskList: [] as Task[], // Specify the type of taskList as an array of Task
    id: 0,
  }),
  actions: {
    // async fetchTaskList() {
    //   const { data }: any = await $fetch("/api/task");
    //   this.taskList = data;
    // },
    async addTask(item: string) {
      this.taskList.push({ item, id: this.id++, completed: false });
      const { data } = await $fetch("/api/task", {
        method: "post",
        body: { taskList: this.taskList },
      });
    },
    deleteTask(id: number) {
      this.taskList = this.taskList.filter((task) => task.id !== id);
    },
    toggleTask(id: number) {
      const todo = this.taskList.find((task) => task.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
