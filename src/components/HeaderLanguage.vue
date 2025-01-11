<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown @click="handleClick">
      <el-button round>
        {{ currentLanguage }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleClick('English')">English</el-dropdown-item>
          <el-dropdown-item @click="handleClick('中文')">中文</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue'

const currentLanguage = ref('English')
const handleClick = (v) => {
  console.log('🚀 ~ handleClick ~ v:', v)
  currentLanguage.value = v
}
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
