<script setup lang="ts">
import { Ref, inject } from 'vue';
import TopNav from '../components/TopNav.vue'
const asideVisible = inject<Ref<boolean>>('xxx')
</script>

<template>
    <TopNav></TopNav>
    <div class="content">
        <aside v-if="asideVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <RouterLink to="/doc/switch">Switch组件</RouterLink>
                </li>
                <li>
                    <RouterLink to="/doc/button">Button组件</RouterLink>
                </li>
                <li>
                    <RouterLink to="/doc/dialog">Dialog组件</RouterLink>
                </li>
                <li>
                    <RouterLink to="/doc/tabs">Tabs组件</RouterLink>
                </li>
            </ol>
        </aside>
        <main>内容</main>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        line-height: 2.5rem;
        background-color: gray;
        width: 25%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        padding-top: 5.5rem;
    }
</style>