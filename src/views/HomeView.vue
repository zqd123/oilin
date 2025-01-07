<script setup>
import HomeHeader from './home/HomeHeader.vue'
import UpBox from './home/UpBox.vue'
import TodayOilPrices from './home/TodayOilPrices.vue'
import ValueStrategy from './home/ValueStrategy.vue'
</script>

<template>
  <HomeHeader></HomeHeader>
  <UpBox></UpBox>
  <div class="prices-block">
    <TodayOilPrices></TodayOilPrices>
  </div>
  <ValueStrategy></ValueStrategy>
</template>
<style scoped>
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
  background-size: 100% 2px; /* 宽度100%，高度2px */
  background-position: center; /* 居中 */
  background-repeat: no-repeat;
}
</style>
