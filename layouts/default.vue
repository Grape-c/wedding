<template>
  <div class="layout-container">
    <div class="glow-container">
      <div
        ref="glowEffect"
        class="glow-effect"
      />
    </div>

    <!-- 導航選單 RWD -->
    <nav class="flex items-center justify-center transition-colors p-2">
      <ul class="flex items-center justify-center gap-6 sm:gap-6 lg:gap-10">
        <li
          v-for="item in navigationItems"
          :key="item.to"
          class="nav-item"
        >
          <NuxtLink
            :to="item.to"
            class="nav-link"
          >
            <!-- 在大螢幕上顯示完整文字 -->
            <span class="hidden sm:inline">
              {{ item.label.split('-')[0] }}
            </span>
            <!-- 在小螢幕上只顯示圖標 -->
            <Icon
              :name="item.icon"
              class="icon-size"
            />
            <span class="hidden lg:inline">
              {{ item.label.split('-')[1] }}
            </span>
            <div
              v-if="isActiveRoute(item.to)"
              class="active-indicator"
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
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="page-container">
      <NuxtPage :transition="{
        name: 'page-slide',
        mode: 'default'
      }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const menuItems = [
  {
    label: '主頁 - Home',
    icon: 'lucide-house',
    to: '/HomePage'
  },
  {
    label: '活動 - Events',
    icon: 'lucide-badge-info',
    to: '/EventPage'
  },
  {
    label: '流程 - Schedule',
    icon: 'lucide-flower',
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

  // 如果當前路徑是根路徑 '/'，導向 HomePage
  if (router.currentRoute.value.path === '/') {
    router.push('/HomePage');
  }
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'JasonHandwriting8';
  src: url('@/public/assets/fonts/JasonHandwriting8.ttf');
}

.font-handwriting {
  font-family: 'White Farmhouse', 'JasonHandwriting8';
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
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.205) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(255, 255, 255, 0) 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.1s ease;
  will-change: left, top, opacity, transform;

  @media (min-width: 640px) {
    width: 500px;
    height: 500px;
  }
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

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  width: 100%;
  padding: 0.5rem 0;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding: 1rem 0;
  }
}

.nav-item {
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.2s;
  position: relative;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0.75rem 1.5rem;
  }
}

.nav-link {
  color: white;
  transition: all 0.3s;
  font-family: 'morano', 'JasonHandwriting8';
  letter-spacing: normal;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  min-width: 2.5rem;

  &:hover {
    color: white;
    font-weight: 800;
  }

  @media (min-width: 640px) {
    gap: 0.75rem;
    font-size: 1.1rem;
    min-width: auto;
  }
}

.icon-size {
  width: 1.25rem;
  height: 1.25rem;

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
  }
}

.active-indicator {
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;

  @media (min-width: 640px) {
    left: 0;
    transform: none;
    width: 100%;
  }
}

// 頁面容器
.page-container {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
}
</style>