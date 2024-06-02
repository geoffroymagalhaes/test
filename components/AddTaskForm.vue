<template>
  <form class="flex flex-col gap-7 items-center" @submit.prevent="handleSubmit">
    <input
      autofocus
      class="w-6/12 h-10 rounded-md text-center"
      v-model="newTask"
      type="text"
      placeholder="Name your task here"
      required
    />
    <button class="btn" type="submit">Add Task</button>
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
