<template>
  <div class="flex gap-[120px]">
    <div class="flex-1 flex flex-col gap-5">
      <div class="title text-4xl max-w-[360px] text-[#1944B4]">{{ title }}</div>
      <div class="text-content text-[#666666] text-[16px]">{{ contentText }}</div>
    </div>
    <div class="flex-1 flex justify-center">
      <div
        class="img w-[540px] h-[280px] bg-no-repeat"
        :style="{ backgroundImage: `url(${imgPath})` }"
      ></div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  contentText: {
    type: String,
    default: '',
  },
  imgPath: {
    type: String,
    default: '',
  },
})
</script>
