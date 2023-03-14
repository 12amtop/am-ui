<script setup lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';
const x = ref('导航1')

</script>
<template>
    <h3>示例1</h3>
    <Tabs v-model:selectedTabTitle="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2222222222">内容2</Tab>
    </Tabs>
</template>