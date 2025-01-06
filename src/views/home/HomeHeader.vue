<template>
  <div class="flex">
    <div class="logo"></div>
    <div class="menu">
      <template v-for="item in headerMenus" :key="item.title">
        <el-dropdown>
          <span class="text-2xl p-2">
            {{ item.title }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="child in item.children" :key="child.title">{{
                child.title
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup>
import { headerMenus } from './headerMenus'
</script>
