<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
</script>

<template>
    <TopNav></TopNav>
    <div class="content">
        <aside>
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
        background-color: gray;
        width: 20%;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>