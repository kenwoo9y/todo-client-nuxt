<template>
  <v-container>
    <!-- タスクがnullの場合はローディング表示 -->
    <div v-if="!task">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <p>読み込み中...</p>
    </div>

    <!-- タスクが存在する場合のみ表示 -->
    <template v-else>
      <div class="d-flex justify-end">
        <TaskUpdate :task="task" />
        <TaskDelete :task="task" />
      </div>
      <p class="text-h4">タスク詳細</p>

      <v-card class="md:mx-4 my-4 md:px-4 py-4">
        <v-table hover>
          <tbody>
            <tr>
              <td>{{ headerTitles[0] }}</td>
              <td>{{ task.title }}</td>
            </tr>
            <tr>
              <td>{{ headerTitles[1] }}</td>
              <td>{{ task.description }}</td>
            </tr>
            <tr>
              <td>{{ headerTitles[2] }}</td>
              <td>{{ task.due_date }}</td>
            </tr>
            <tr>
              <td>{{ headerTitles[3] }}</td>
              <td>{{ task.status }}</td>
            </tr>
            <tr>
              <td>{{ headerTitles[4] }}</td>
              <td>{{ formatDateTime(task.created_at) }}</td>
            </tr>
            <tr>
              <td>{{ headerTitles[5] }}</td>
              <td>{{ formatDateTime(task.updated_at) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </template>
  </v-container>
</template>

<script setup>
import TaskUpdate from '@/components/tasks/TaskUpdate.vue';
import TaskDelete from '@/components/tasks/TaskDelete.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from '#app';
import { useTaskStore } from '@/stores/task';
import { formatDateTime } from '@/utils/dateUtils';

const route = useRoute();
const taskStore = useTaskStore();

const headerTitles = ref([
  'タイトル',
  '詳細',
  '期日',
  'ステータス',
  '作成日時',
  '更新日時',
]);

const task = ref(null);

// タスクの初期読み込み
const loadTask = async () => {
  const taskId = parseInt(route.params.id); // 文字列から数値に変換
  if (!taskId) return;

  // タスクストアから該当するタスクを検索
  const foundTask = taskStore.tasks.find((t) => t.id === taskId);
  if (foundTask) {
    task.value = { ...foundTask }; // オブジェクトをコピー
  } else {
    // タスクが見つからない場合は、APIから直接取得を試みる
    try {
      await taskStore.fetchTask(taskId);
      task.value = taskStore.tasks.find((t) => t.id === taskId) || null;
    } catch (error) {
      console.error('タスクの取得に失敗しました:', error);
      task.value = null;
    }
  }
};

// タスクストアの変更を監視
watch(
  () => [...taskStore.tasks], // 配列の中身の変更を確実に検知
  (newTasks) => {
    if (!task.value?.id) return;
    const updatedTask = newTasks.find((t) => t.id === task.value.id);
    if (updatedTask) {
      task.value = { ...updatedTask };
    }
  },
  { deep: true }, // ネストされたオブジェクトの変更も検知
);

// ルートパラメータが変更された時にタスクを再読み込み
watch(
  () => route.params.id,
  async () => {
    await loadTask();
  },
  { immediate: true }, // コンポーネントの初期化時にも実行
);

// コンポーネントのマウント時にタスクを読み込む
onMounted(async () => {
  await loadTask();
});
</script>
