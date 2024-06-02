<template>
  <!-- form add task & prevent auto refresh -->
  <form class="flex flex-col gap-7 items-center" @submit.prevent="handleSubmit">
    <!-- input field two-way binding to newtask -->
    <input
      autofocus
      class="w-6/12 h-10 rounded-md text-center"
      v-model="newTask"
      type="text"
      placeholder="Name your task here"
      required
    />
    <!-- Submit button -->
    <button class="btn" type="submit">Add Task</button>
  </form>
</template>

<script setup lang="ts">
// import ref for reactivity
import { ref } from "vue";
// import tasklist from store
import { useTaskListStore } from "../store/taskList";
// define reactive variable
const newTask = ref("");
// initilize tasklist store
const taskListStore = useTaskListStore();

const handleSubmit = () => {
  // add new task to tasklist store
  taskListStore.addTask(newTask.value);
  // clearing input field
  newTask.value = "";
};
</script>
