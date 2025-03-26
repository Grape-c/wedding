<template>
  <div class="background-red">event</div>
</template>

<style scoped>
.background-red {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #9d2933; /* Change background color to red */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Ensure it is at the bottom */
}
</style>