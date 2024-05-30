<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="newTask"
      type="text"
      placeholder="Name your task here"
      required
    />
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskListStore } from "../store/taskList";

const newTask = ref("");
const taskListStore = useTaskListStore();

const handleSubmit = () => {
  taskListStore.addTask(newTask.value);
  newTask.value = "";
};
</script>
