<script setup lang="ts">
import { Ref, inject } from 'vue';
const asideVisible = inject<Ref<boolean>>('asideVisible')
const toggleAside = () => {
    asideVisible!.value = !asideVisible!.value
}
</script>
<template>
    <div class="top">
        <div class="topNav">
            <span class="menuChangeButton" @click="toggleAside">
                <i-bi-list />
            </span>
            <div class="logo">
                <RouterLink to="/">
                    <i-svg-spinners-clock></i-svg-spinners-clock>
                </RouterLink>
            </div>
            <div class="menu">
                <RouterLink to="/doc">
                    <i-material-symbols-bookmark></i-material-symbols-bookmark>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@mixin barAssign {
    cursor: pointer;
    color: rgb(215, 215, 224);
    font-size: 1.5rem;
    position: absolute;
    top: calc(50% - .75rem);
}

.top {
    width: 100%;
    position: fixed;
    top: 0;
    color: rgb(204, 188, 188);
    background: linear-gradient(.25turn, rgb(85, 24, 24), rgb(72, 72, 211));

    >.topNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        position: relative;
        z-index: 0;
        background: black;

        >.menuChangeButton {
            font-size: 1.5rem;
            left: 1rem;
            display: none;
            cursor: pointer;
        }

        >.logo {
            @include barAssign;
            left: 1rem;
        }

        >.menu {
            @include barAssign;
            right: 1rem;
        }

        @media (max-width:500px) {
            >.menu {
                display: none;
            }

            >.logo {
                position: absolute;
                margin-left: 0;
                top: calc(50% - .75rem);
                left: calc(50% - .75rem);
            }

            >.menuChangeButton {
                display: inline-block;
                position: absolute;
                top: calc(50% - .75rem);
            }
        }
    }
}
</style>