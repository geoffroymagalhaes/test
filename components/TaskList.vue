<template>
  <!-- conditionnal show message if no task -->
  <div v-if="taskList.length === 0">
    <h1 class="mb-5">There are no Tasks added yet.</h1>
    <!-- link to add a task -->
    <NuxtLink class="btn" to="/addtask">Add Task</NuxtLink>
  </div>
  <div>
    <!-- loop through the task list and render task item -->
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
// import the task list store
import { useTaskListStore } from "../store/taskList";
// init task list store
const taskListStore = useTaskListStore();
// calling methods to fetch the tasks
taskListStore.fetchTasks();
// reactively track the task list
const taskList = computed(() => taskListStore.taskList);
</script>

<style scoped></style>
