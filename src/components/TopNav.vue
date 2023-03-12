<script setup lang="ts">
import { Ref, inject } from 'vue';
const asideVisible = inject<Ref<boolean>>('asideVisible')
const toggleAside = () => {
    asideVisible.value = !asideVisible.value
}
</script>
<template>
    <div class="top">
        <div class="topNav">
            <span class="menuChangeButton" @click="toggleAside">=</span>
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top {
    background-color: red;
    width: 100%;
    position: fixed;
    top: 0;

    >.topNav {
        background-color: rgb(152, 194, 232);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        position: relative;
        z-index: 0;

        >.menuChangeButton {
            color: red;
            position: absolute;
            display: none;
        }

        >.logo {
            margin-left: 1.5rem;
        }

        >.menu {
            display: flex;
            margin-right: 1rem;

            >li {
                margin: 0 1rem;
            }
        }

        @media (max-width:500px) {
            >.menu {
                display: none;
            }

            >.logo {
                margin: 0 auto;
            }

            >.menuChangeButton {
                display: inline-block;
            }
        }
    }
}
</style>