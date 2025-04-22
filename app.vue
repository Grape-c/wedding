<!-- app.vue -->
<script setup>
const router = useRouter();

// 修改全局路由守衛
router.beforeEach((to, from, next) => {
  // 如果是根路徑，重定向到正確的路徑
  if (to.path === '/') {
    next('/wedding/HomePage');
  } else if (to.path === '/HomePage') {
    // 如果直接訪問 /HomePage，重定向到正確的路徑
    next('/wedding/HomePage');
  } else {
    next();
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>