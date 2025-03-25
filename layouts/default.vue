<template>
  <div>
    <!-- <UDashboardToolbar color="orange"> -->
    <UNavigationMenu
      :items="items"
      highlight
      class="flex items-center justify-center "
      color="warning"
    />
    <slot /> <!-- 這裡會插入頁面內容 -->
    <!-- </UDashboardToolbar> -->
  </div>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
definePageMeta({
  layout: 'default' // 指定這個頁面使用 `layouts/default.vue`
})
const items = ref<NavigationMenuItem[]>([
  {
    label: '主頁',
    icon: 'i-lucide-user',
    active: true
  },
  {
    label: 'Members',
    icon: 'i-lucide-users'
  },
  {
    label: 'Notifications',
    icon: 'i-lucide-bell'
  }
]);
</script>