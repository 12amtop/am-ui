<script setup lang="ts">
import { Ref, inject } from 'vue';
const asideVisible = inject<Ref<boolean>>('asideVisible')

</script>
<template>
    <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
            <li>
                <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
                <router-link to="/doc/install">安装</router-link>
            </li>
            <li>

                <router-link to="/doc/getStarted">开始使用</router-link>
            </li>
        </ol>
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
    background: rgb(109, 79, 100);
    height: 100vh;
    z-index: 12;
    color: rgb(10,10,10);
    width: 10rem;

    li {
        margin: 1rem 0;
        cursor: pointer;

        >a {
            display: inline-block;
            width: 10rem;
            padding: 0 1rem;
            color: rgb(214,225,255);
            &:hover{
                opacity: .8;
            }
        }

        >.router-link-active {
            transition: all .25s;
            background-color: rgb(93, 47, 79);
        }
    }
}
</style>