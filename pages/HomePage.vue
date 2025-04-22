<template>
  <div class="flex h-[calc(100vh-4rem)] background-image">
    <!-- 左側計時器 -->
    <div class="w-1/2 flex items-center justify-center timer-container">
      <div class="text-center relative timer-content">
        <!-- 流動背景形狀 - 底層 -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blob-container"
          :class="{ 'blob-visible': isLoaded }"
        >
          <svg
            width="600"
            height="500"
            viewBox="0 0 600 500"
            class="blob"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  class="gradient-start"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff50;#ffffff50;#ffffff50"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  class="gradient-end"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff75;#ffffff75;#ffffff75"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  class="gradient-start"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff75;#ffffff75;#ffffff75"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  class="gradient-end"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff50;#ffffff50;#ffffff50"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  class="gradient-start"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff75;#ffffff75;#ffffff75"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  class="gradient-end"
                >
                  <animate
                    attributeName="stop-color"
                    values="#ffffff50;#ffffff50;#ffffff50"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <!-- 底層形狀 - 左下大形狀 -->
            <path
              class="animate-blob1"
              d="M160 140
                C 290 120, 340 180, 380 220
                C 420 260, 380 310, 340 330
                C 300 350, 220 360, 180 320
                C 140 280, 40 240, 60 190
                C 80 140, 110 150, 160 140
                Z"
              fill="url(#gradient1)"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M160 140 C290 120,340 180,380 220 C420 260,380 310,340 330 C300 350,220 360,180 320 C140 280,40 240,60 190 C80 140,110 150,160 140Z;
                  M140 160 C270 140,320 200,360 240 C400 280,360 330,320 350 C280 370,200 380,160 340 C120 300,20 260,40 210 C60 160,90 170,140 160Z;
                  M180 120 C310 100,360 160,400 200 C440 240,400 290,360 310 C320 330,240 340,200 300 C160 260,60 220,80 170 C100 120,130 130,180 120Z;
                  M160 140 C290 120,340 180,380 220 C420 260,380 310,340 330 C300 350,220 360,180 320 C140 280,40 240,60 190 C80 140,110 150,160 140Z"
              />
            </path>

            <!-- 中間形狀 - 左上小形狀 -->
            <ellipse
              cx="200"
              cy="140"
              rx="65"
              ry="50"
              fill="url(#gradient3)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 220 140"
                to="360 220 140"
                dur="25s"
                repeatCount="indefinite"
              />
            </ellipse>


            <!-- 上層形狀 - 右下橢圓形狀 -->
            <path
              class="animate-blob2"
              d="M380 240
                C 500 210, 540 240, 560 290
                C 580 340, 540 390, 460 410
                C 380 430, 320 410, 280 380
                C 240 350, 240 320, 260 280
                C 280 240, 320 230, 380 240
                Z"
              fill="url(#gradient2)"
            >
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="
                  M380 240 C500 210,540 240,560 290 C580 340,540 390,460 410 C380 430,320 410,280 380 C240 350,240 320,260 280 C280 240,320 230,380 240Z;
                  M400 220 C520 190,560 220,580 270 C600 320,560 370,480 390 C400 410,340 390,300 360 C260 330,260 300,280 260 C300 220,340 210,400 220Z;
                  M360 260 C480 230,520 260,540 310 C560 360,520 410,440 430 C360 450,300 430,260 400 C220 370,220 340,240 300 C260 260,300 250,360 260Z;
                  M380 240 C500 210,540 240,560 290 C580 340,540 390,460 410 C380 430,320 410,280 380 C240 350,240 320,260 280 C280 240,320 230,380 240Z"
              />
            </path>
          </svg>
        </div>

        <div class="relative z-10 py-8 text-content-wrapper">
          <h1 class="text-3xl md:text-6xl mb-2 font-bold number-font">Jim &
            Dorothy</h1>
          <h2 class="text-3xl md:text-5xl mb-3 font-bold countdown-font">德毅的一天
          </h2>
          <!-- <h3 class="text-2xl mb-2 countdown-font">最後倒數</h3> -->
          <div class="text-4xl font-mono number-font">
            {{ formatTime(timeLeft) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 右側內容 -->
    <div class="w-1/2 p-4">
      <!-- 右側內容待補充 -->
    </div>
  </div>
</template>

<script setup lang="ts">
const targetDate = new Date('2025-05-17T12:00:00')
const timeLeft = ref(0)
const isLoaded = ref(false)

const formatTime = (seconds: number) => {
  const days = Math.floor(seconds / (24 * 60 * 60))
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
  const mins = Math.floor((seconds % (60 * 60)) / 60)
  const secs = seconds % 60
  return `${days}days ${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const updateTimer = () => {
  const now = new Date()
  timeLeft.value = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000))
}

// 在組件掛載時開始計時
onMounted(() => {
  updateTimer() // 立即更新一次
  setInterval(updateTimer, 1000) // 每秒更新一次

  // 添加一個小延遲來觸發動畫
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/morano');
@import url('https://fonts.cdnfonts.com/css/testimonia');
@import url('https://fonts.cdnfonts.com/css/white-farmhouse');


@font-face {
  font-family: 'JasonHandwriting8';
  src: url('@/public/assets/fonts/JasonHandwriting8.ttf');
  font-display: swap;
}


.number-font {
  font-family: 'morano', sans-serif;
  color: rgb(59, 47, 92);
}

.countdown-font {
  font-family: JasonHandwriting8, monospace;
  color: rgb(59, 47, 92);
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/public/assets/image/HomePageBG.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  /* Ensure it is at the bottom */
}

.blob {
  filter: blur(2px);
}


.background-image {
  background-image: url('@/public/assets/image/HomePageBG.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.animate-blob1 {
  animation: blob1 20s infinite ease-in-out;
  transform-origin: center;
}

.animate-blob2 {
  animation: blob2 20s infinite ease-in-out;
  transform-origin: center;
  transform: rotate(100deg);
}

.animate-blob3 {
  animation: blob3 25s infinite ease-in-out;
  transform-origin: center;
}

@keyframes blob1 {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  33% {
    transform: scale(1.2) rotate(3deg);
  }

  66% {
    transform: scale(0.9) rotate(-2deg);
  }
}

@keyframes blob2 {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  33% {
    transform: scale(0.8) rotate(-3deg);
  }

  66% {
    transform: scale(1.1) rotate(2deg);
  }
}

@keyframes blob3 {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  33% {
    transform: scale(1.1) rotate(-2deg);
  }

  66% {
    transform: scale(0.9) rotate(2deg);
  }
}

.timer-container {
  @media (max-width: 640px) {
    transform: translateX(50px);
  }
}

/* 確保內容在偏移時不會被切掉 */
.timer-content {
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 1rem;
  }
}

.blob-container {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.blob-visible {
  opacity: 1;
  visibility: visible;
}

/* 添加預載入動畫 */
.text-content-wrapper {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>