<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex gap-2 items-center">
      <div class="value text-xl" :style="{ color: priceColor }">{{ price }}</div>
      <div v-if="arrow === 'up'" class="arrow-up">
        <el-icon size="20px" :color="arrowColor"><Top /></el-icon>
      </div>
      <div v-else class="arrow-down">
        <el-icon size="20px" :color="arrowColor"><Bottom /></el-icon>
      </div>
    </div>
    <div class="memo flex gap-2">
      <span>{{ memo }}</span>
      <span class="w-[20px]"></span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  price: {
    type: Number,
    default: 0,
  },
  priceColor: {
    type: String,
    default: '',
  },
  memo: {
    type: String,
    default: '',
  },

  arrow: {
    type: String,
    default: 'up',
  },
  arrowColor: {
    type: String,
    default: '',
  },
})
</script>
<style scoped></style>
