<script setup lang="ts">
import { Ref, inject } from 'vue';
const asideVisible = inject<Ref<boolean>>('xxx')
const toggleAside = ()=>{
    asideVisible.value = !asideVisible.value
}
</script>
<template>
    <div class="topNav">
        <span class="menuChangeButton" @click="toggleAside">=</span>
        <div class="logo" >LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.topNav {
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    position: relative;
    z-index: 0;
    .menuChangeButton {
        color: red;
        position: absolute;
    }
    .logo {
        margin-left: 1.5rem;
    }

    .menu {
        // background-color: red;
        display: flex;
        justify-content: stretch;
        margin-right: 1rem;

        li {
            margin-left: 1rem;
        }
    }
}
</style>