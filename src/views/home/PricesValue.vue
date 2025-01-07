<template>
  <div>
    <div class="flex gap-2 items-center">
      <div class="value text-xl" :style="{ color: priceColor }">{{ price }}</div>
      <div v-if="arrow === 'up'" class="arrow-up">
        <el-icon size="20px"><Top /></el-icon>
      </div>
      <div v-else class="arrow-down">
        <el-icon size="20px"><Bottom /></el-icon>
      </div>
    </div>
    <div class="memo">{{ memo }}</div>
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
})
</script>
<style scoped></style>
