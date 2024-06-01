<template>
  <div>
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
import { useTaskListStore } from "../store/taskList";

const taskListStore = useTaskListStore();

taskListStore.fetchTasks();

const taskList = computed(() => taskListStore.taskList);
</script>

<style scoped></style>
