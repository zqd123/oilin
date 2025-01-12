<template>
  <div class="px-28 bg-white">
    <SecondUpBox
      class="pt-5"
      :title="drillingTechnology.title"
      :contentText="drillingTechnology.contentText"
      :imgPath="drillingTechnology.imgPath"
    />
    <TitleAdvantages class="mt-[40px]" />
    <div class="grid grid-cols-3 gap-4 mb-[40px]">
      <ImageTextCard
        v-for="item in drillingTechnology.advantages"
        :key="item.index"
        :advantage="item"
      />
    </div>
  </div>
</template>
<script setup>
import TitleAdvantages from '@/components/TitleAdvantages.vue'
import SecondUpBox from './SecondUpBox.vue'
import { secondData } from './secondData'
import ImageTextCard from '@/components/ImageTextCard.vue'

const { drillingTechnology } = secondData
</script>
