<template>
  <div>
    <div class="title-box">
      <div class="title-text">{{ $t('service-scope') }}</div>
      <div class="title-sub">
        {{ $t('complete-solutions-for-oil') }} & {{ $t('and-gas-industry') }}
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 px-28">
      <ImgOverlay
        v-for="img in serviceImgs"
        :key="img.id"
        :imgPath="img.imgPath"
        :imgTitle="img.imgTitle"
        :spanWidth="img.spanWidth"
        :routerPath="img.routerPath"
      />
    </div>
  </div>
</template>
<script setup>
import ImgOverlay from '@/components/ImgOverlay.vue'
import { serviceImgs } from './serviceImgs'
</script>
<style scoped>
.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}
.title-text {
  font-size: 40px;
  font-weight: 400;
}
.title-sub {
  font-size: 28px;
  font-weight: 400;
}
</style>
