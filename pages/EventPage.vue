<template>
  <div class="page-wrapper background">
    <div class="px-4 py-2 md:py-10 mt-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        <div
          v-for="(event, index) in events"
          :key="index"
          class="card-wrapper"
        >
          <div class="card-container">
            <div class="card-content">
              <div class="flex flex-col items-center justify-center h-full">
                <UIcon
                  :name="event.icon"
                  :size="isMobile ? 40 : 50"
                  class="text-rose-200 mb-4 sm:mb-6 icon"
                />
                <h3 class="text-2xl sm:text-3xl font-handwriting text-rose-200">
                  {{ event.title }}
                </h3>
              </div>
            </div>

            <div class="card-details">
              <div class="details-header">
                <div class="flex flex-col items-center w-full">
                  <UIcon
                    :name="event.icon"
                    :size="isMobile ? 20 : 24"
                    class="text-rose-200 mb-2"
                  />
                  <h4 class="text-lg sm:text-xl font-handwriting text-rose-200">
                    {{ event.title }}
                  </h4>
                </div>
              </div>

              <div class="divider" />

              <div class="details-body">
                <p
                  class="text-sm sm:text-base text-white/90 mb-2 font-handwriting">
                  {{ event.description }}
                </p>
                <p
                  v-if="event.details"
                  class="text-xs sm:text-sm text-white/80 italic font-handwriting"
                >
                  {{ event.details }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// 檢測是否為移動設備
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

interface Event {
  title: string;
  description: string;
  icon: string;
  details?: string;
}

const events: Event[] = [
  {
    title: '酒水暢飲',
    icon: 'i-lucide-wine',
    description: '提供酒水，住附近的朋友們走路有益身體健康!',
    details: '喝酒不開車，開車不喝酒'
  },
  {
    title: '會場限制',
    icon: 'i-lucide-building-2',
    description: '辛志平為百年古蹟，禁止吸煙與攜帶寵物',
    details: '為保護古蹟環境，請配合場地規範'
  },
  {
    title: '服裝要求',
    icon: 'i-lucide-shirt',
    description: '服裝要求不限，新娘不怕被比下去',
    details: '大家都可以穿得美美的，一起創造美好回憶~'
  },
  {
    title: '花藝帶回家',
    icon: 'i-lucide-flower-2',
    description: '響應環保，婚禮結束後花藝將裝束供賓客帶走',
    details: '有興趣的親朋好友們可以留下來索取!'
  },
  {
    title: '現場活動',
    icon: 'i-lucide-palette',
    description: '現場有婚禮小畫家與精緻點心bar',
    details: '提早來不怕沒事做，還可以享用美味點心'
  }
];
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

.ddd:hover {
  color: red;
}

.card-wrapper {
  position: relative;
}

.card-container {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  color: white;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  height: 180px;

  @media (min-width: 640px) {
    padding: 2rem;
    height: 220px;
  }

  @media (max-width: 640px) {
    height: 160px;

    .card-details {
      padding: 1rem;
    }

    .divider {
      margin: 0.5rem auto;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);

    .card-content {
      opacity: 0;
      transform: translateY(-20px);
    }

    .card-details {
      opacity: 1;
      transform: translateY(0);
    }

    .icon {
      transform: scale(0.9);
    }
  }
}

.card-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 1;
  z-index: 2;
}

.icon {
  transition: transform 0.3s ease;
}

.card-details {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1;
}

.divider {
  width: 60%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 1rem auto;
}

.details-body {
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.page-wrapper {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #9d2933;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>