<template>
  <div class="px-28 bg-white">
    <SecondUpBox
      class="pt-5"
      :title="investmentNewBusiness.title"
      :contentText="investmentNewBusiness.contentText"
      :imgPath="investmentNewBusiness.imgPath"
    />
    <div class="grid grid-cols-1 gap-4 mb-[40px] px-[120px] pt-[40px]">
      <ImageTextCard
        v-for="item in investmentNewBusiness.advantages"
        :key="item.index"
        :advantage="item"
      />
    </div>
  </div>
</template>
<script setup>
import SecondUpBox from './SecondUpBox.vue'
import { secondData } from './secondData'
import ImageTextCard from '@/components/ImageTextCard.vue'

const { investmentNewBusiness } = secondData
</script>
