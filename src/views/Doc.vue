<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Aside from '../lib/Aside.vue'
</script>

<template>
    <div class="layout">
        <TopNav class="nav"></TopNav>
        <div class="content">
            <Aside class="aside"></Aside>
            <main>
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    height: 100vh;
    overflow: auto;

    >.content {
        line-height: 2.5rem;
        z-index: -1;

        >.aside {
            padding-top: 4rem;
        }

        >main {
            padding: 4rem 2rem;
            margin-left: 10rem;
            z-index: 0;
        }

        @media (max-width:500px) {
            >main {
                margin-left: 0;
                -webkit-tap-highlight-color: transparent;
            }
        }
    }
}
</style>