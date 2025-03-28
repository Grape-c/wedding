<template>
  <div class="page-wrapper background">
    <div class="mx-auto px-4 py-12 mt-16 relative z-10">
      <div class="timeline-container">
        <div class="timeline-line" />

        <div class="timeline-items">
          <div
            v-for="(event, index) in scheduleEvents"
            :key="index"
            class="timeline-item"
          >
            <!-- 左側時間和標題 -->
            <div class="time-title-block">
              <span class="time font-handwriting">{{ event.time }}</span>
              <h3 class="title font-handwriting">{{ event.title }}</h3>
            </div>

            <!-- 中間圖標 -->
            <div class="icon-block">
              <UIcon
                :name="event.icon"
                class="icon"
              />
            </div>

            <!-- 右側詳細資訊 -->
            <div class="content-block">
              <div class="connector" />
              <p class="description font-handwriting">
                {{ event.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ScheduleEvent {
  time: string;
  icon: string;
  title: string;
  description: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    time: '11:30',
    icon: 'i-lucide-users',
    title: '入席',
    description: '歡迎親朋好友蒞臨，請提早入席'
  },
  {
    time: '12:00',
    icon: 'i-lucide-party-popper',
    title: '開場',
    description: '婚禮正式開始，新人進場'
  },
  {
    time: '12:30',
    icon: 'i-lucide-utensils',
    title: '午宴開始',
    description: '享用美味佳餚，共度歡樂時光'
  },
  {
    time: '13:30',
    icon: 'i-lucide-camera',
    title: '拍照時間',
    description: '新人敬酒與賓客合影'
  },
  {
    time: '14:30',
    icon: 'i-lucide-heart-handshake',
    title: '落幕',
    description: '感謝各位的祝福，期待下次相見'
  }
];
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
}

.timeline-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%);

  @media (max-width: 640px) {
    left: 1.25rem;
    top: 0;
    bottom: 0;
    width: 2px;
    height: auto;
    transform: translateX(-50%);
  }
}

.timeline-items {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.timeline-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 200px;
  position: relative;

  &:hover {
    .content-block {
      opacity: 1;
      transform: translateX(-50%) translateY(0.5rem);

      .connector {
        height: 0.5rem;
        opacity: 1;
      }
    }

    .icon-block {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 0.2);

      .icon {
        transform: rotate(360deg);
      }
    }
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 1rem;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-left: 3rem;
    padding-bottom: 2rem;
    max-width: none;

    &:not(:last-child)::after {
      display: none;
    }
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
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    order: 2;
    width: 100%;

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

  .icon {
    color: white;
    font-size: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;

    .icon {
      font-size: 1.2rem;
    }
  }
}

.content-block {
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%) translateY(0.5rem);
  opacity: 0;
  width: 200px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  .connector {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    width: 2px;
    height: 0;
    background: linear-gradient(to bottom,
        transparent,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3));
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translateY(-0.5rem);
    width: 100%;
    order: 3;
    margin-left: 0;

    .connector {
      display: none;
    }
  }
}

@font-face {
  font-family: 'JasonHandwriting8';
  src: url('@/assets/fonts/JasonHandwriting8.ttf');
}

.font-handwriting {
  font-family: 'morano', 'JasonHandwriting8';
  font-weight: 200;
  line-height: 1.5;
}
</style>
