<template>
  <div v-if="taskList.length === 0">
    <h1 class="mb-5">There are no Tasks added yet.</h1>
    <NuxtLink class="btn" to="/addtask">Add Task</NuxtLink>
  </div>
  <div>
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
// import { useTaskListStore } from "../store/taskList";
// import { storeToRefs } from "#imports";
// const taskListStore = useTaskListStore();
// const { taskList } = storeToRefs(taskListStore);

import { useTaskListStore } from "../store/taskList";
const taskListStore = useTaskListStore();
taskListStore.fetchTasks();
const taskList = computed(() => taskListStore.taskList);
</script>

<style scoped></style>
