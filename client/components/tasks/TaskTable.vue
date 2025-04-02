<template>
  <v-container>
    <div class="d-flex justify-end">
      <TaskCreate />
    </div>
    <p class="text-h4">ToDo</p>

    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="tasks"
      :items-per-page-options="pages"
      items-per-page-text="表示行数"
      class="elevation-1"
      hover
      @click:row="handleRowClick"
    >
      <template #[`item.index`]="{ index }">
        {{ index + 1 }}
      </template>
      <template #[`item.actions`]="{ item }">
        <TaskUpdate :task="item" />
        <TaskDelete :task="item" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import TaskCreate from '@/components/tasks/TaskCreate.vue';
import TaskUpdate from '@/components/tasks/TaskUpdate.vue';
import TaskDelete from '@/components/tasks/TaskDelete.vue';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from '#app';
import { useTaskStore } from '@/stores/task';

const router = useRouter();
const taskStore = useTaskStore();

const itemsPerPage = ref(5);

const pages = ref([
  { value: 5, title: '5' },
  { value: 10, title: '10' },
  { value: 20, title: '20' },
  { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
]);

const headers = ref([
  { title: '#', align: 'end', sortable: false, key: 'index' },
  { title: 'タイトル', align: 'start', key: 'title' },
  { title: '期日', align: 'end', key: 'due_date' },
  { title: 'ステータス', align: 'end', key: 'status' },
  { title: '操作', align: 'end', sortable: false, key: 'actions' },
]);

const tasks = ref([]);

onMounted(async () => {
  await taskStore.fetchTasks(); // 非同期関数を呼び出してタスクを取得
  tasks.value = taskStore.tasks; // 取得したタスクをtasksに設定
});

watch(
  () => taskStore.tasks,
  (newTasks) => {
    tasks.value = newTasks;
  },
);

const handleRowClick = (event, row) => {
  console.log('Clicked item:', row.item);
  router.push({ path: `/detail/${row.item.id}` });
};
</script>
