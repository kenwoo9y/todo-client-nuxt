import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#imports';

export const useTaskStore = defineStore('task', () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  const tasks = ref([]);
  const loading = ref(false);

  async function fetchTasks() {
    loading.value = true;
    try {
      const response = await globalThis.$fetch(`${apiUrl}/tasks`);
      tasks.value = response || [];
    } catch {
      tasks.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function fetchTask(id) {
    try {
      const response = await globalThis.$fetch(`${apiUrl}/tasks/${id}`);
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.value[index] = response;
      } else {
        tasks.value.push(response);
      }
      return response;
    } catch {
      return null;
    }
  }

  async function createTask(task) {
    const taskPayload = {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
      owner_id: task.owner_id,
    };
    const response = await globalThis.$fetch(`${apiUrl}/tasks`, {
      method: 'POST',
      body: taskPayload,
    });
    tasks.value.push(response);
  }

  async function updateTask(taskUpdate) {
    const response = await globalThis.$fetch(
      `${apiUrl}/tasks/${taskUpdate.id}`,
      {
        method: 'PATCH',
        body: {
          title: taskUpdate.title,
          description: taskUpdate.description,
          due_date: taskUpdate.due_date,
          status: taskUpdate.status,
          owner_id: taskUpdate.owner_id,
        },
      },
    );

    const index = tasks.value.findIndex((task) => task.id === taskUpdate.id);
    if (index !== -1) {
      tasks.value[index] = response;
    }
  }

  async function deleteTask(id) {
    await globalThis.$fetch(`${apiUrl}/tasks/${id}`, {
      method: 'DELETE',
    });
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }

  return {
    tasks,
    loading,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
  };
});
