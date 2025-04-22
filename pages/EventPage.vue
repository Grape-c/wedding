<template>
  <div class="page-wrapper background pb-10 md:pb-0">
    <div class="px-4 py-2 md:py-10 mt-16 mb-16 md:mb-0">
      <div class="text-center mb-8">
        <h1
          class="font-handwriting text-rose-200 text-3xl md:text-4xl flex items-center justify-center gap-2 title-size"
        >
          2025年05月17日(六)
        </h1>
        <h1
          class="font-handwriting text-rose-200 text-3xl md:text-4xl justify-center gap-2 title-size"
        >
          辛志平校場故居 - (TAIVII餐酒館)
          <br>
          <div
            class="cursor-pointer hover:text-rose-300 transition-colors mt-2 flex items-center justify-center gap-2 location-button"
            @click="showTrafficInfo = true"
          >
            <Icon
              name="lucide-map-pin"
              class="text-rose-200 animate-bounce"
            />
            <span>新竹市東區東門街32號</span>
            <Icon
              name="lucide-chevron-right"
              class="text-rose-200/70"
            />
          </div>
        </h1>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="card-wrapper"
        >
          <div class="card-container">
            <div class="card-content">
              <div class="flex flex-col items-center justify-center h-full">
                <Icon
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
                  <Icon
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

      <!-- 修改底部分隔線 -->
      <div class="hidden md:flex fixed bottom-[10vh] left-0 w-full items-center justify-center">
        <div
          class="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-rose-200/40 to-transparent"
        />
      </div>
    </div>

    <!-- 交通資訊彈窗 -->
    <Teleport to="body">
      <div
        v-if="showTrafficInfo"
        class="modal-overlay"
      >
        <div
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4 py-8"
          @click.self="showTrafficInfo = false"
        >
          <div
            class="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div class="flex flex-col items-center mb-8">
              <div class="flex items-center justify-between w-full mb-2">
                <div class="w-8" /> <!-- 空的 div 用來平衡右側關閉按鈕 -->
                <h2 class="text-4xl font-handwriting text-rose-200">交通資訊</h2>
                <button
                  class="text-white/80 hover:text-white w-8 flex justify-end"
                  @click="showTrafficInfo = false"
                >
                  <Icon name="lucide-x" />
                </button>
              </div>
              <div
                class="w-1/3 h-px bg-gradient-to-r from-transparent via-rose-200/30 to-transparent"
              />
            </div>
            <div class="flex flex-col md:flex-row gap-6">
              <!-- 左側文字資訊 -->
              <div class="text-white/90 font-handwriting space-y-4 md:w-1/2">
                <div class="space-y-2">
                  <div class="flex items-center">
                    <Icon
                      name="lucide-circle-parking"
                      class="text-rose-200"
                    />
                    <h3 class="ml-2 text-xl text-rose-200">停車資訊</h3>
                  </div>
                  <p class="ml-4">1.辛志平門口公有停車格</p>
                  <p class="ml-4">2.竹市東區區公所停車場</p>
                  <p class="ml-4">3.東大陸橋下停車場-中華站</p>
                  <p class="ml-4">4.遠見東民停車場</p>
                  <p class="ml-4">5.東門城圓環停車場</p>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <Icon
                      name="lucide-bike"
                      class="text-rose-200"
                    />
                    <h3 class="ml-2 text-xl text-rose-200">UBike</h3>
                  </div>
                  <p class="ml-4">辛志平門口設有UBike1.0站點</p>
                </div>
                <div>
                  <div class="flex items-center">
                    <Icon
                      name="lucide-train"
                      class="text-rose-200"
                    />
                    <h3 class="ml-2 text-xl text-rose-200">大眾運輸</h3>
                  </div>
                  <p class="ml-4 mb-2">
                    <span class="transport-label">台鐵</span>
                    新竹火車站，步行約10分鐘可抵達
                  </p>
                  <p class="ml-4 mb-2">
                    <span class="transport-label">高鐵</span>
                    新竹高鐵站，轉搭六家台鐵至新竹火車站，步行10分鐘可抵達
                  </p>
                  <p class="ml-4">
                    <span class="transport-label">客運</span>
                    新竹轉運站，步行約15分鐘/計程車約5分鐘可抵達
                  </p>
                </div>
              </div>

              <!-- 右側地圖 -->
              <div class="md:w-1/2 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.2026467881088!2d120.97134567375645!3d24.804362084098383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468355de6cc9125%3A0x43b38dc3f43e2df9!2sTAIVII%E9%A4%90%E9%85%92%E9%A4%A8%E8%BE%9B%E5%BF%97%E5%B9%B3(%E5%BE%8C%E6%A3%9F)(%E6%96%B0%E7%AB%B9%E5%B8%82)!5e0!3m2!1szh-TW!2stw!4v1711334622599!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

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
    icon: 'lucide-wine',
    description: '提供無限量精緻酒水，好朋友們走路有益身體健康!',
    details: '喝酒不開車，開車不喝酒'
  },
  {
    title: '花藝帶回家',
    icon: 'lucide-flower-2',
    description: '響應環保，婚禮結束後花藝將裝束供賓客帶走',
    details: '和德馨一樣喜歡花花的親朋好友們可以留下來索取！'
  },
  {
    title: '現場活動',
    icon: 'lucide-palette',
    description: '現場有婚禮速畫家與限量點心吧',
    details: '提早來不怕沒事做，用美味點心來開開你的胃吧！'
  },
  {
    title: '會場限制',
    icon: 'lucide-building-2',
    description: '辛志平為百年古蹟，禁止吸煙與攜帶寵物，入場時需拖鞋，建議穿著襪子',
    details: '為保護古蹟環境，請配合場地規範'
  },
  {
    title: '服裝要求',
    icon: 'lucide-shirt',
    description: '服裝要求不限，新娘不怕被比下去',
    details: '大家盡量穿得美美的，一起創造美好回憶~'
  },
];

const showTrafficInfo = ref(false);


// 監聽彈窗狀態，控制背景滾動
watch(showTrafficInfo, (newValue) => {
  if (newValue) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
});

// 組件卸載時確保清理
onUnmounted(() => {
  document.body.classList.remove('modal-open');
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'JasonHandwriting8';
  src: url('/wedding/assets/fonts/JasonHandwriting8.ttf');
}

.font-handwriting {
  font-family: JasonHandwriting8, 'JasonHandwriting8';
  font-weight: 200;
  font-size: 1.1rem;
  line-height: 1.5;
}

.title-size {
  font-size: 1.3rem;
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
  height: 240px;

  @media (min-width: 640px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 320px;
    padding: 1.5rem;
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

.details-header {
  margin-bottom: 0.75rem;
  width: 100%;
}

.divider {
  width: 60%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 0.75rem auto;
  opacity: 1;
  transition: none;
  display: block;
}

.details-body {
  width: 100%;
  text-align: center;
  margin-top: 0.75rem;

  p {
    &:first-child {
      margin-bottom: 0.75rem;
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

// 優化彈窗動畫
.fixed {
  animation: fadeIn 0.3s ease;

  >div {
    animation: slideUp 0.3s ease;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.transport-label {
  display: inline-block;
  padding: 0.1rem 0.3rem;
  background: #f5d1d1;
  border: 1px solid #e69696;
  border-radius: 4px;
  color: #e47575;
  font-weight: 500;
  margin-right: 0.5rem;
  backdrop-filter: blur(4px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  isolation: isolate;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: transparent;
  }
}

// 當彈窗開啟時，禁止背景滾動
:global(body.modal-open) {
  overflow: hidden;
}

// 自定義滾動條樣式
.max-h-\[90vh\] {
  scrollbar-width: thin;
  scrollbar-color: rgba(251, 207, 232, 0.3) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(251, 207, 232, 0.3);
    border-radius: 3px;
  }
}

.location-button {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);

  &::after {
    content: '點擊查看交通資訊';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    color: rgba(251, 207, 232, 0.7);
    white-space: nowrap;

    @media (min-width: 640px) {
      content: '';
    }
  }

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

// 調整地圖圖標的動畫
.animate-bounce {
  animation: gentleBounce 2s infinite;
}

@keyframes gentleBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

@media (max-width: 1024px) {
  .card-details {
    padding: 1rem;
  }

  .divider {
    margin: 0.5rem auto;
  }
}

/* 調整分隔線的樣式 */
.bg-gradient-to-r {
  background: linear-gradient(to right,
      transparent,
      rgba(251, 207, 232, 0.4),
      /* 增加透明度 */
      transparent);
}
</style>