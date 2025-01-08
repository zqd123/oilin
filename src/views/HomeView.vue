<script setup>
import HomeHeader from './home/HomeHeader.vue'
import UpBox from './home/UpBox.vue'
import TodayOilPrices from './home/TodayOilPrices.vue'
import ValueStrategy from './home/ValueStrategy.vue'
import ServiceScope from './home/ServiceScope.vue'
import FooterBox from './home/FooterBox.vue'
</script>

<template>
  <div class="snap-none">
    <div class="home-block">
      <HomeHeader class="px-4" />
      <UpBox></UpBox>
    </div>
    <div class="prices-block">
      <TodayOilPrices />
    </div>
    <ValueStrategy />
    <ServiceScope class="mb-16" />
    <FooterBox />
  </div>
</template>
<style scoped>
.home-block {
  background: url('../assets/home/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}
.prices-block {
  display: flex;
  justify-content: center;
  background: linear-gradient(
    117deg,
    #1944b4 0%,
    #afdfee 22%,
    #1944b4 49%,
    #9fece3 74%,
    #1944b4 100%
  );
  background-size: 100% 4px; /* 宽度100%，高度2px */
  background-position: center; /* 居中 */
  background-repeat: no-repeat;
}
</style>
