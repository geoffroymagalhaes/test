<template>
  <div class="flex flex-col min-h-screen">
    <header class="shadow-sm bg-white sticky top-0 z-10">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-xl text-red-400"
          >To Do App</NuxtLink
        >
        <ul class="flex gap-4 font-medium">
          <li><NuxtLink to="/">My List</NuxtLink></li>
          <li><NuxtLink to="/addtask">Add Task</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto px-4 flex-grow">
      <slot />
    </main>
    <footer class="bg-white py-4 shadow-inner sticky bottom-0 z-10">
      <h1 class="text-red-400 font-medium text-center">Made with ❤️ by Geo</h1>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #f87171;
}
</style>
