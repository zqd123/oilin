<template>
  <div class="advantage-item">
    <div class="icon mb-[20px]">
      <el-image class="h-[40px]" :src="advantage.iconPath" />
    </div>
    <div class="text-content text-center text-[16px]">{{ advantage.textContent }}</div>
  </div>
</template>
<script setup>
defineProps({
  advantage: Object,
})
</script>
<style scoped>
.advantage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #f5f6f9;
}
</style>
