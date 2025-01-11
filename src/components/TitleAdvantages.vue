<template>
  <div class="title-advantages">{{ title }}</div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Advantages',
  },
})
</script>
<style scoped>
.title-advantages {
  width: 260px;
  height: 36px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #a9ccff 0%, rgba(190, 208, 255, 0) 100%);
  font-size: 25px;
  color: #000000;
}
.title-advantages::before {
  content: '';
  width: 4px;
  height: 36px;
  background: #1944b4;
  margin-right: 16px;
}
</style>
