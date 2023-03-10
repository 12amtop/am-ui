<script setup lang="ts">
import { provide, ref } from 'vue';
import { router } from './router'
const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 500 ? false : true);
provide('asideVisible', asideVisible)
router.afterEach(() => {
  if (width < 500) {
    asideVisible.value = false
  }
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
</style>
