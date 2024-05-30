<template>
  <div>
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
import { useTaskListStore } from "../store/taskList";
import { storeToRefs } from "pinia";

const taskListStore = useTaskListStore();
const { taskList } = storeToRefs(taskListStore);
</script>

<style scoped></style>
