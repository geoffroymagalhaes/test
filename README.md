## Getting Started

To get started with this project:

1. Clone the repository.
2. Install dependencies using `yarn install`.
3. Start the development server using `yarn dev`.

# Task Management Application

This repository contains a simple task management application built with Vue.js, Pinia, and Nuxt.js. The application allows users to add, delete, and toggle the completion status of tasks.

## Project Structure

### Components

- **AddTaskForm.vue**: A form component for adding new tasks.
- **TaskList.vue**: A component to display the list of tasks.
- **TaskItem.vue**: A component to display individual tasks with options to mark as completed or delete.

### Layouts

- **default.vue**: Define Headers & Footer and the structure of the page.

### Pages

- **addTask.vue**: Page containing AddTaskForm component.
- **index.vue**: Home page containing the taskItem within taskList component.

### Store

- **taskListStore**: A Pinia store for managing the task list, including actions for fetching, adding, deleting, and toggling tasks.

### API

- **api/task.ts**: An API endpoint handler for managing tasks. It supports the following HTTP methods:
  - `GET`: Fetch all tasks.
  - `POST`: Add a new task.
  - `DELETE`: Delete a task by ID.
  - `PATCH`: Toggle the completion status of a task by ID.
