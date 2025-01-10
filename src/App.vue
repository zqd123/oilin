<script setup>
import { RouterView } from 'vue-router'
import HomeHeader from '@/views/home/HomeHeader.vue'
import FooterBox from '@/views/home/FooterBox.vue'
</script>

<template>
  <div class="app-block">
    <HomeHeader class="px-4" />
    <RouterView class="flex-1" />
    <FooterBox class="mt-auto" />
  </div>
</template>

<style scoped>
.app-block {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
