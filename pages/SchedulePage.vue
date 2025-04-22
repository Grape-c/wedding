<template>
  <div class="page-wrapper background">
    <div class="mx-auto px-4 py-12 mt-8 md:mt-16 relative z-10">
      <div class="timeline-container">
        <div class="timeline-items">
          <!-- 遍歷所有事件 -->
          <template
            v-for="(event, index) in scheduleEvents"
            :key="index"
          >
            <!-- 事件區塊 -->
            <div class="event-block">
              <div class="time-title-block">
                <span class="time font-handwriting">{{ event.time }}</span>
                <h3 class="title font-handwriting">{{ event.title }}</h3>
              </div>

              <div
                class="icon-block"
                :class="{ 'clicked': clickedIcon === index }"
                @mouseenter="handleHover(index)"
                @mouseleave="handleHover(null)"
                @click="handleClick(index)"
              >
                <Icon
                  :name="event.icon"
                  class="icon"
                />
                <!-- 懸浮內容 -->
                <div
                  class="content-block"
                  :class="{ 'show': hoveredIndex === index }"
                >
                  <div class="connector" />
                  <p class="description font-handwriting">
                    {{ event.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- 連接線 (最後一個不需要) -->
            <div
              v-if="index < scheduleEvents.length - 1"
              class="timeline-connector"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ScheduleEvent {
  time: string;
  icon: string;
  title: string;
  description: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    time: '11:00',
    icon: 'lucide-users',
    title: '入席',
    description: '歡迎親朋好友蒞臨，現場備有小活動與餐前點心，盡量提早入席~'
  },
  {
    time: '11:30',
    icon: 'lucide-party-popper',
    title: '開場',
    description: '婚禮正式開始，賓客們請在入場前至吧台索取喜愛的酒水，等待新人進場一起乾杯!'
  },
  {
    time: '12:00',
    icon: 'lucide-utensils',
    title: '午宴開始',
    description: '享用辛志平的美味佳餚，共度歡樂時光<3'
  },
  {
    time: '13:00',
    icon: 'lucide-camera',
    title: '活動時間',
    description: '再去拿杯酒，讓我們跟你敬酒吧!還有你不能錯過的活動時間喔~新郎準備很久呢'
  },
  {
    time: '14:30',
    icon: 'lucide-heart-handshake',
    title: '落幕',
    description: '感謝各位的蒞臨祝福，期待下次相見敘舊!'
  }
];

const hoveredIndex = ref<number | null>(null);
const clickedIcon = ref<number | null>(null);

const handleHover = (index: number | null) => {
  // 只在大螢幕處理 hover
  if (window.matchMedia('(min-width: 640px)').matches) {
    hoveredIndex.value = index;
  }
};

const handleClick = (index: number) => {
  // 如果已經點擊過，先重置狀態
  if (clickedIcon.value === index) {
    clickedIcon.value = null;
    hoveredIndex.value = null;
    return;
  }

  // 設置新的點擊狀態
  clickedIcon.value = index;
  hoveredIndex.value = index;

  // 500ms 後重置點擊狀態（與動畫時間匹配）
  setTimeout(() => {
    clickedIcon.value = null;
  }, 500);
};
</script>

<style scoped lang="scss">
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
  height: 100%;
  background-color: #2c5474;
  /* Change background color to red */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  /* Ensure it is at the bottom */
}

.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 640px) {
    margin-top: 0;
    padding-top: 0;
  }
}

.timeline-items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-left: 0;
    padding-top: 0;
  }
}

.event-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 160px;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    position: relative;
    padding: 2rem 1rem;
  }
}

.timeline-connector {
  width: 100px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 -1px;

  @media (max-width: 640px) {
    display: none;
  }
}

.time-title-block {
  text-align: center;
  padding: 0;

  .time {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .title {
    color: white;
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    width: 120px;
    padding-left: 1rem;

    .time {
      margin-bottom: 0;
      font-size: 1.2rem;
    }

    .title {
      font-size: 1.1rem;
    }
  }
}

.icon-block {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  .icon {
    color: white;
    font-size: 1.5rem;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0deg);
    /* 添加初始旋轉角度 */
  }

  /* 桌面設備的 hover 效果 */
  @media (min-width: 640px) {
    &:hover {
      .icon {
        transform: rotate(360deg);
      }
    }
  }

  /* 移動設備的點擊效果 */
  @media (max-width: 639px) {

    &:active .icon,
    &.clicked .icon {
      transform: rotate(360deg);
    }

    /* 重置動畫，但不顯示過渡效果 */
    &:not(.clicked) .icon {
      transition: none;
      transform: rotate(0deg);
    }
  }

  @media (max-width: 640px) {
    margin: 0;
    position: relative;
    margin-left: calc(120px + 2rem);

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 2px;
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(-50%);
    }

    &::before {
      bottom: 100%;
    }

    &::after {
      top: 100%;
    }

    .timeline-items>.event-block:first-child & {
      &::before {
        display: none;
      }
    }

    .timeline-items>.event-block:last-child & {
      &::after {
        display: none;
      }
    }
  }
}

.content-block {
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%) translateY(0.5rem);
  opacity: 0;
  pointer-events: none;
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
    z-index: 20;

    .connector {
      height: 1rem;
      opacity: 1;
    }
  }

  .connector {
    position: absolute;
    top: -1rem;
    left: 50%;
    width: 2px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 50%;
    left: calc(100% + 1rem);
    transform: translateY(-50%);
    width: calc(100vw - 14rem);
    min-width: 200px;
    max-width: 250px;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    margin: 0;

    &.show {
      opacity: 1;
      pointer-events: auto;

      .connector {
        width: 1rem;
        opacity: 1;
      }
    }

    .connector {
      display: block;
      position: absolute;
      top: 50%;
      left: -1rem;
      width: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-50%);
      transition: all 0.3s ease;
    }
  }
}

@font-face {
  font-family: 'JasonHandwriting8';
  src: url('/wedding/assets/fonts/JasonHandwriting8.ttf');
}

.font-handwriting {
  font-family: 'morano', 'JasonHandwriting8';
  font-weight: 200;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .timeline-items {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-left: 0;
  }

  .event-block {
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 1rem;
    position: relative;
    padding: 2rem 1rem;
  }

  .time-title-block {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    width: 100px;

    s .time {
      margin-bottom: 0;
      font-size: 1.2rem;
    }

    .title {
      font-size: 1.1rem;
    }
  }

  .icon-block {
    margin: 0;
    position: relative;

    .content-block {
      position: absolute;
      top: 50%;
      left: calc(100% + 1rem);
      transform: translateY(-50%) translateX(0);
      width: calc(100vw - 16rem);
      max-width: 150px;
      margin: 0;
      opacity: 0;
      pointer-events: none;

      &.show {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
        pointer-events: auto;

        .connector {
          width: 1rem;
          opacity: 1;
        }
      }

      .connector {
        top: 50%;
        left: -1rem;
        width: 0;
        height: 2px;
        transform: translateY(-50%);
      }
    }

    &::before,
    &::after {
      left: 50%;
      width: 2px;
      background: rgb(141, 148, 169);
      transform: translateX(-50%);
    }

    &::before {
      top: -2.5rem;
      height: 2.5rem;
    }

    &::after {
      bottom: -2.5rem;
      height: 2.5rem;
    }
  }

  .mx-auto {
    padding-top: 2rem !important;
  }
}
</style>
