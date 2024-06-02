<template>
  <div class="flex gap-4 my-4 justify-center">
    <!-- display item & conditional line-through for completed tasks -->
    <h1
      class="bg-white w-6/12 py-1 rounded-md overflow-x-auto whitespace-nowrap"
      :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
    >
      {{ task.item }}
    </h1>
    <!-- button toggle completion task status  -->
    <button @click="toggleTask(task.id)">
      <!-- conditional colored icon for completed tasks -->
      <i v-if="task.completed === false" class="material-icons">check</i>
      <i v-else class="material-icons text-green-600">check</i>
    </button>
    <!-- button triggering deleteTask  -->
    <button class="hover:text-red-600" @click="deleteTask(task.id)">
      <i class="material-icons">delete</i>
    </button>
  </div>
</template>

<script setup lang="ts">
// define task props from Tasklist
const { task } = defineProps(["task"]);
// import task list store
import { useTaskListStore } from "../store/taskList";
// calling the task list store
const taskListStore = useTaskListStore();
// destructure action methods from store
const { toggleTask, deleteTask } = taskListStore;
</script>

<style scoped></style>
