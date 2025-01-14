<template>
  <div class="flex flex-col justify-center items-center gap-9">
    <el-image style="width: auto; height: 83px" :src="developing" fit="cover" />
    <div>{{ $t('site-developing') }}……</div>
  </div>
</template>
<script setup>
import developing from '@/assets/images/developing.png'
</script>
