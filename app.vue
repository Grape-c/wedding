<!-- app.vue -->
<script setup>
const router = useRouter();

// 全局路由守衛
router.beforeEach((to, from, next) => {
  // 如果是根路徑，重定向到 HomePage
  if (to.path === '/') {
    next('/HomePage');
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