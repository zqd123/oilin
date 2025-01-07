<template>
  <div
    class="h-[70px] flex w-full flex-wrap items-center justify-between text-[#333333] text-[16px]"
  >
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" class="h-[70px]" />
    </div>
    <div class="menu flex gap-10">
      <template v-for="menu in headerMenus" :key="menu.title">
        <el-dropdown v-if="menu?.children?.length > 0">
          <span
            class="text-base text-[#333333] hover:text-[#1944B4] hover:border-b-2 hover:border-solid hover:border-blue-600 whitespace-nowrap"
          >
            {{ menu.title }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="child in menu.children" :key="child.title">{{
                child.title
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div
          v-else
          class="cursor-pointer text-[#333333] hover:text-[#1944B4] hover:border-b-2 hover:border-solid hover:border-blue-600 whitespace-nowrap"
        >
          {{ menu.title }}
        </div>
      </template>
    </div>
    <div class="right flex gap-4">
      <HeaderLanguage />
      <el-button type="primary" round @click="() => {}">登录</el-button>
    </div>
  </div>
</template>
<script setup>
import { headerMenus } from './headerMenus'
import HeaderLanguage from '@/components/HeaderLanguage.vue'
</script>
