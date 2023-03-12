<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const value= ref(false)
</script>
<template>
    <h2>Switch示例</h2>
    <Switch v-model:value="value"></Switch>
</template>