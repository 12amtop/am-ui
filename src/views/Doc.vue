<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Aside from '../lib/Aside.vue'
</script>

<template>
    <div class="layout">
        <TopNav class="nav"></TopNav>
        <div class="content">
            <Aside></Aside>
            <main>
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {

    >.content {
        line-height: 2.5rem;
        z-index: -1;
        // display: flex;
        // justify-content: flex-start;


        >main {
            margin-top: 4rem;
            padding: 1rem 2rem;
            margin-left: 7rem;
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