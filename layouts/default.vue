<template>
  <div class="background-red">
    <UNavigationMenu
      :items="items"
      variant="link"
      class="flex items-center justify-center custom-navigation-menu"
    >
      <template #item="{ item }">
        <p
          class="text-white transition-colors tracking-normal hover:text-white hover:font-extrabold hover:tracking-tight mx-4"
        >
          <span v-for="(part, index) in splitLabel(item.label)" :key="index" :class="{'font-style-zh': isChinese(part), 'font-style-en': !isChinese(part)}">
            {{ part }}
          </span>
        </p>
      </template>
    </UNavigationMenu>
    <transition name="fade" mode="out-in">
      <slot :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
definePageMeta({
  layout: 'default' // 指定這個頁面使用 `layouts/default.vue`
})
const items = ref<NavigationMenuItem[]>([
  {
    label: '主頁 - HOME',
    icon: 'i-lucide-house',
    to: '/HomePage',
    active: true
  },
  {
    label: '活動事項 - Events',
    icon: 'i-lucide-square-chart-gantt',
    to: '/eventPage'
  },
  {
    label: '婚禮流程 - Wedding Schedule ',
    icon: 'i-lucide-flower',
    to: '/schedulePage'
  }
]);

const isChinese = (text: string) => {
  return /[\u4e00-\u9fa5]/.test(text);
};

const splitLabel = (label: string) => {
  return label.split(/(?=[\u4e00-\u9fa5])|(?<=[\u4e00-\u9fa5])/);
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/morano');
@font-face {
  font-family: 'JasonHandwriting8';
  src: url('@/assets/fonts/JasonHandwriting8.ttf');
}

.font-style-zh {
  font-family: 'JasonHandwriting8', monospace;
  font-size:  1.5rem;
}

.font-style-en {
  font-family: 'morano', sans-serif;
  font-size:  1.5rem;
}

.custom-navigation-menu .navigation-menu-item {
  margin: 0 2rem; /* Adjust the margin to increase spacing between items */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>