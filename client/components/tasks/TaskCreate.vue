<template>
  <v-btn color="primary" class="text-capitalize" @click="openDialog">
    タスク作成
  </v-btn>

  <v-dialog v-model="dialog" max-width="800">
    <v-sheet>
      <v-card title="新規タスク作成"></v-card>
      <task-form
        :initial-data="newTask"
        :status-list="statusList"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/store/task';
import TaskForm from '@/components/tasks/TaskForm.vue';
import { formatDateForAPI } from '@/utils/dateUtils';
const dialog = ref(false);
const statusList = ref(['ToDo', 'Doing', 'Done']);

const taskStore = useTaskStore();
const newTask = ref({
  title: '',
  description: '',
  due_date: '',
  status: 'ToDo',
  owner_id: 1,
});

const openDialog = () => {
  dialog.value = true;
};

const handleSubmit = (formData) => {
  // 日付をISO形式に変換
  const formattedData = {
    ...formData,
    due_date: formatDateForAPI(formData.due_date),
  };

  taskStore.createTask(formattedData);
  newTask.value = {
    title: '',
    description: '',
    due_date: '',
    status: 'ToDo',
    owner_id: 1,
  };
  dialog.value = false;
};

const handleCancel = () => {
  dialog.value = false;
};
</script>
