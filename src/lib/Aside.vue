<script setup lang="ts">
import { Ref, inject } from 'vue';
const asideVisible = inject<Ref<boolean>>('asideVisible')

</script>
<template>
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
</template>

<style lang="scss">
aside {
    position: fixed;
    padding: .5rem;
    background-color: rgb(38, 57, 90);
    height: 100vh;
    z-index: 12;
    color: white;

    li {
        margin: 1rem .5rem;
    }
}
</style>