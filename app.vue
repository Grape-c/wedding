<!-- app.vue -->
<script setup>
import { ref } from 'vue';
const router = useRouter();
const route = useRoute();
const isLoading = ref(true);

// 修改全局路由守衛
router.beforeEach((to, from, next) => {
  // 移除路徑中的 /wedding 前綴
  const targetPath = to.path.replace('/wedding', '');

  // 處理根路徑和 HomePage 的重定向
  if (targetPath === '/' || targetPath === '') {
    next('/HomePage');
  } else if (targetPath === '/HomePage' && to.path.includes('/wedding')) {
    // 如果路徑包含 /wedding，移除它
    next('/HomePage');
  } else {
    next();
  }
});

// 處理 loading 狀態
onMounted(() => {
  // 檢查並修正當前路徑
  const currentPath = route.path.replace('/wedding', '');
  if (currentPath === '/' || currentPath === '') {
    router.push('/HomePage');
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <!-- Loading 組件 -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="loading-screen"
    >
      <div class="loading-content">
        <div class="loading-ring" />
        <div class="loading-text">
          Loading...
        </div>
      </div>
    </div>
  </Transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c5474;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
}

.loading-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ring 1.2s linear infinite;
}

.loading-text {
  color: #fff;
  font-size: 1.5rem;
  font-family: 'morano', sans-serif;
  letter-spacing: 0.2em;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>