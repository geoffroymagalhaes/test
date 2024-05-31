<template>
  <div>
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
    <div v-for="task in taskList" :key="task.id"></div>
  </div>
</template>

<script setup lang="ts">
const { data: taskList } = await useFetch("/api/task");

// import { useTaskListStore } from "../store/taskList";
// import { storeToRefs } from "pinia";

// const taskListStore = useTaskListStore();
// const { taskList } = storeToRefs(taskListStore);
</script>

<style scoped></style>
