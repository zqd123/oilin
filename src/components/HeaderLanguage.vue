<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown @click="handleClick">
      <el-button round>
        {{ currentLanguage }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleClick('en')">English</el-dropdown-item>
          <el-dropdown-item @click="handleClick('zh')">中文</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const currentLanguage = computed(() => {
  return locale.value === 'en' ? 'English' : locale.value === 'zh' ? '中文' : ''
})
const handleClick = (v) => {
  locale.value = v
  localStorage.setItem('lang', v)
  location.reload()
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
