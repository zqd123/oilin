<template>
  <div class="today-box w-2/3 relative">
    <div class="prices-box flex flex-col items-center justify-center gap-3 pt-4">
      <div class="date absolute -top-2 text-center">{{ formatted }}</div>
      <div class="title text-base font-semibold">{{ $t('todays-oil-prices-b') }}</div>
      <div class="prices w-full flex justify-evenly">
        <template v-for="item in todayOilPrices" :key="item.date">
          <PricesValue
            :price="item.price"
            :memo="item.memo"
            :priceColor="item.priceColor"
            :arrow="item.arrow"
            :arrowColor="item.arrowColor"
          ></PricesValue>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import PricesValue from './PricesValue.vue'
import { ref } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'
import axios from '@/http/axios'
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD')

const priceColors = ['#1944B4', '#B45B19', '#19A3B4']

const todayOilPrices = ref([])
axios.get('/api/v1/petroleum/data').then((res) => {
  todayOilPrices.value = mappingPrices(res.data.data)
})

function mappingPrices(data) {
  const prices = []
  data.forEach((item, index) => {
    prices.push({
      name: item.code,
      price: item.value,
      arrow: parseInt(item.changeAmount) > 0 ? 'up' : 'down',
      memo: item.code,
      priceColor: priceColors[index],
      arrowColor: parseInt(item.changeAmount) > 0 ? '#FA5151' : '#3BB92D',
    })
  })
  return prices
}
// const todayOilPrices = ref([
//   {
//     name: '1',
//     price: 80.56,
//     arrow: 'up',
//     memo: i18n.global.t('brent'),
//     priceColor: '#1944B4',
//     arrowColor: '#FA5151',
//   },
//   {
//     name: '2',
//     price: 100.08,
//     arrow: 'down',
//     memo: i18n.global.t('opec-reference-basket'),
//     priceColor: '#B45B19',
//     arrowColor: '#3BB92D',
//   },
//   {
//     name: '3',
//     price: 90.25,
//     arrow: 'up',
//     memo: i18n.global.t('wtl'),
//     priceColor: '#19A3B4',
//     arrowColor: '#FA5151',
//   },
// ])
</script>
<style scoped>
.today-box {
  width: 60%;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px #dee4f3;
  border-radius: 60px;
  background-size: 10px;
}
.date {
  width: 120px;
  height: 20px;
  background: #1944b4;
  border-radius: 11px;
  font-size: 14px;
  color: #ffffff;
}
</style>
