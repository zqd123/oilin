<template>
  <div class="h-[70px] flex w-full flex-wrap items-center text-[#333333] text-[16px]">
    <div class="logo mr-10">
      <RouterLink :to="`/`">
        <img src="@/assets/logo.svg" alt="logo" class="h-[70px]" />
      </RouterLink>
    </div>
    <div class="menu flex gap-10">
      <template v-for="menu in headerMenus" :key="menu.title">
        <el-dropdown v-if="menu?.children?.length > 0" placement="bottom-start">
          <span
            class="text-base text-[#333333] hover:text-[#1944B4] border-b-2 border-transparent hover:border-solid hover:border-blue-600 whitespace-nowrap"
          >
            {{ menu.title }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="child in menu.children" :key="child.title">
                <RouterLink :to="child.path">{{ child.title }}</RouterLink></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div
          v-else
          class="cursor-pointer text-[#333333] hover:text-[#1944B4] border-b-2 border-transparent hover:border-solid hover:border-blue-600 whitespace-nowrap"
        >
          {{ menu.title }}
        </div>
      </template>
    </div>
    <div class="right flex gap-4 ml-auto">
      <HeaderLanguage />
      <el-button type="primary" round @click="() => {}" style="background-color: #1944b4"
        >Login</el-button
      >
    </div>
  </div>
</template>
<script setup>
import { headerMenus } from './headerMenus'
import HeaderLanguage from '@/components/HeaderLanguage.vue'
</script>
<style scoped>
:deep(.el-button--primary) {
  background-color: #1944b4;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
