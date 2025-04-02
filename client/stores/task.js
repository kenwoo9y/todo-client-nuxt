import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '#app';

export const useTaskStore = defineStore('task', () => {
  // state
  const tasks = ref([]);

  // getters
  async function fetchTasks() {
    const { data } = await useFetch('/api/tasks');
    tasks.value = data.value;
  }

  async function fetchTask(id) {
    const { data: fetchedTask } = await useFetch(`/api/tasks/${id}`);

    const index = tasks.value.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.value[index] = fetchedTask.value;
    } else {
      tasks.value.push(fetchedTask.value);
    }

    return fetchedTask.value;
  }

  // actions
  async function createTask(task) {
    const taskPayload = {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
      owner_id: task.owner_id,
    };
    const { data } = await useFetch('/api/tasks', {
      method: 'POST',
      body: taskPayload,
    });
    tasks.value.push(data.value);
  }

  async function updateTask(taskUpdate) {
    const { data } = await useFetch(`/api/tasks/${taskUpdate.id}`, {
      method: 'PATCH',
      body: {
        title: taskUpdate.title,
        description: taskUpdate.description,
        due_date: taskUpdate.due_date,
        status: taskUpdate.status,
        owner_id: taskUpdate.owner_id,
      },
    });

    const index = tasks.value.findIndex((task) => task.id === taskUpdate.id);
    if (index !== -1) {
      tasks.value[index] = data.value;
    }
  }

  async function deleteTask(id) {
    await useFetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }

  return {
    tasks,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
  };
});
