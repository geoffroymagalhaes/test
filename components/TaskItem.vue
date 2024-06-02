<template>
  <div class="flex gap-4 my-4 justify-center">
    <h1
      class="bg-white w-6/12 py-1 rounded-md overflow-x-auto whitespace-nowrap"
      :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
    >
      {{ task.item }}
    </h1>
    <button @click="toggleTask(task.id)">
      <i v-if="task.completed === false" class="material-icons">check</i>
      <i v-else class="material-icons text-green-600">check</i>
    </button>
    <button @click="deleteTask(task.id)">
      <i class="material-icons">delete</i>
    </button>
  </div>
</template>

<script setup lang="ts">
const { task } = defineProps(["task"]);

import { useTaskListStore } from "../store/taskList";
const taskListStore = useTaskListStore();
const { toggleTask, deleteTask } = taskListStore;
</script>

<style scoped></style>
