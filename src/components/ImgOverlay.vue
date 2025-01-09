<template>
  <div class="image-with-overlay" :class="`span-${spanWidth}`">
    <div class="img" :style="{ backgroundImage: `url(${imgPath})` }"></div>
    <div class="overlay">
      <div class="text flex justify-center">
        {{ imgTitle }}
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  imgPath: String,
  imgTitle: String,
  spanWidth: Number,
})
</script>
<style scoped>
.image-with-overlay {
  position: relative;
  display: inline-block;
}
.span-2 {
  grid-column: span 2;
}

.image-with-overlay .img {
  width: 100%;
  height: 200px;
  background-position: center center;
  background-size: cover;
}

.overlay {
  position: absolute;
  bottom: 0; /* 蒙版初始位置在底部 */
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 蒙版背景颜色和透明度 */
  color: white;
  overflow: hidden;
  width: 100%;
  height: 30px; /* 初始状态下高度为0 */
  transition: all 0.5s ease; /* 平滑显示和隐藏 */
  display: flex;
  align-items: center;
  padding-inline: 16px;
}

.image-with-overlay:hover .overlay {
  height: 100%; /* 悬停时高度变为100%，即覆盖整个图片 */
  justify-content: center;
}
.image-with-overlay:hover .text {
  font-size: 20px;
  width: 60%;
}
</style>
