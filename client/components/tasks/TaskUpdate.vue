<template>
  <MdiIcon icon="mdiPencil" small class="mr-2" @click.stop="openDialog" />

  <v-dialog v-model="dialog" max-width="800">
    <v-sheet>
      <v-card title="タスク更新"></v-card>
      <task-form
        :initial-data="formData"
        :status-list="statusList"
        submit-text="更新"
        submit-color="warning"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTaskStore } from '@/stores/task';
import TaskForm from '@/components/tasks/TaskForm.vue';
import { formatDateForAPI } from '@/utils/dateUtils';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);
const statusList = ref(['ToDo', 'Doing', 'Done']);

const formData = ref({
  title: '',
  description: '',
  status: '',
  due_date: '',
  owner_id: '',
});

const taskStore = useTaskStore();

const openDialog = () => {
  dialog.value = true;
};

const handleSubmit = (formData) => {
  // 日付をISO形式に変換
  const formattedData = {
    ...formData,
    due_date: formatDateForAPI(formData.due_date),
  };

  taskStore.updateTask({
    id: props.task.id,
    ...formattedData,
  });
  dialog.value = false;
};

const handleCancel = () => {
  dialog.value = false;
};

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      formData.value = {
        title: newTask.title || '',
        description: newTask.description || '',
        status: newTask.status || '',
        due_date: newTask.due_date ? newTask.due_date : '',
        owner_id: newTask.owner_id || '',
      };
    }
  },
  { immediate: true },
);
</script>
