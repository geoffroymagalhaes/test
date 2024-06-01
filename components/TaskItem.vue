<template>
  <div>
    <h1 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.item }}
    </h1>
    <button @click="toggleTask(task.id)">Compléter</button>
    <button @click="deleteTask(task.id)">Supprimer</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const { task } = defineProps(["task"]);

import { useTaskListStore } from "../store/taskList";
const taskListStore = useTaskListStore();

const { toggleTask, deleteTask } = taskListStore;
</script>

<style scoped></style>
