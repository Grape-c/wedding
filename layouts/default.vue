<template>
  <div class="relative min-h-screen">
    <div class="glow-container">
      <div
        ref="glowEffect"
        class="glow-effect"
      />
    </div>
    <UNavigationMenu
      :items="navigationItems"
      variant="link"
      class="flex items-center justify-center transition-colors p-2"
      :ui="{
        item: 'px-6 py-3 rounded-xl transition-colors duration-200 relative',
      }"
    >
      <template #item="{ item }">
        <span
          class="text-white transition-colors font-handwriting tracking-normal hover:text-white hover:font-extrabold whitespace-nowrap px-2 flex items-center gap-2 relative"
        >
          {{ item.label.split('-')[0] }}
          <UIcon
            :name="item.icon"
            class="w-4 h-4"
          />
          {{ item.label.split('-')[1] }}
          <div
            v-if="isActiveRoute(item.to)"
            class="absolute -bottom-2 left-0 w-full h-[3px] hand-drawn-line"
          >
            <svg
              class="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 25"
            >
              <path
                d="M0,8 C6,18 18,-3 28,12 S45,2 58,14 S73,0 85,10 S98,6 102,12"
                class="stroke-white/70 stroke-[15] fill-none"
                stroke-linecap="round"
                stroke-linejoin="round"
                pathLength="100"
              />
            </svg>
          </div>
        </span>
      </template>
    </UNavigationMenu>

    <div class="page-container">
      <NuxtPage :transition="{
        name: 'page-slide',
        mode: 'default'
      }" />
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();

const menuItems = [
  {
    label: '主頁 - Home',
    icon: 'i-lucide-house',
    to: '/HomePage'
  },
  {
    label: '活動事項 - Events',
    icon: 'i-lucide-badge-info',
    to: '/EventPage'
  },
  {
    label: '婚禮流程 - Wedding Schedule',
    icon: 'i-lucide-flower',
    to: '/SchedulePage'
  }
];

// 判斷當前路由是否激活
const isActiveRoute = (path: string) => {
  return route.path === path;
};

// 計算屬性：根據當前路由更新選單項
const navigationItems = computed(() =>
  menuItems.map(item => ({
    ...item,
    active: isActiveRoute(item.to as string)
  }))
);

// 使用 ref 來獲取 DOM 元素
const glowEffect = ref<HTMLElement | null>(null);

// 修改光暈效果控制
onMounted(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (glowEffect.value) {
      const x = e.clientX;
      const y = e.clientY;

      glowEffect.value.style.left = `${x}px`;
      glowEffect.value.style.top = `${y}px`;
      glowEffect.value.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (glowEffect.value) {
      glowEffect.value.style.opacity = '0';
    }
  };

  // 在整個文檔上監聽滑鼠移動
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);

  // 清理函數
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
  });
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'JasonHandwriting8';
  src: url('@/assets/fonts/JasonHandwriting8.ttf');
}

.font-handwriting {
  font-family: 'morano', 'JasonHandwriting8';
  font-weight: 200;
  font-size: 1.1rem;
  line-height: 1.5;
}

/* 添加動畫效果 */
.w-2 {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 0.5;
    transform: scale(1);
  }
}

/* 高級的頁面轉場效果 */
.page-slide-enter-active {
  animation: slideInFancy 1s ease forwards;
}

.page-slide-leave-active {
  animation: slideOutFancy 1s ease forwards;
}

@keyframes slideInFancy {
  0% {
    opacity: 0;
    filter: saturate(0) brightness(1.2);
    transform: scale(1.1) translateY(20px);
  }

  100% {
    opacity: 1;
    filter: saturate(1) brightness(1);
    transform: scale(1) translateY(0);
  }
}

@keyframes slideOutFancy {
  0% {
    opacity: 0.5;
    filter: saturate(1) brightness(1);
    transform: scale(2);
  }

  100% {
    opacity: 0;
    filter: saturate(1.2) brightness(0.8);
    transform: scale(1);
  }
}

/* 光暈效果 */
.glow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.glow-effect {
  position: fixed;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.205) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(255, 255, 255, 0) 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.1s ease;
  will-change: left, top, opacity, transform;
}

.hand-drawn-line {
  width: 70%;
  left: -5%;
  transform: translateY(1px);

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: drawLine 0.8s ease-out forwards;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}

@keyframes drawLine {
  0% {
    stroke-dashoffset: 100;
  }

  60% {
    stroke-dashoffset: 40;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>