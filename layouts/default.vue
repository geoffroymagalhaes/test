<template>
  <header>
    <nav>
      <NuxtLink to="/">To Do App</NuxtLink>
      <ul>
        <li><NuxtLink to="/">My List</NuxtLink></li>
        <li><NuxtLink to="/addtask">Add Task</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
