<script setup lang="ts">
import { Ref, inject } from 'vue';
import TopNav from '../components/TopNav.vue'
const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>

<template>
    <div class="layout">
        <TopNav class="nav"></TopNav>
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
        display: flex;
        justify-content: flex-start;
        >aside {
            margin-top: 4rem;
            position: fixed;
            padding: .5rem;
            background-color: rgb(38, 57, 90);
            color: white;
            height: 100vh;

            li {
                margin: 1rem .5rem;
            }
        }

        >main {
            margin-top: 4rem;
            padding: 1rem 2rem;
            flex: 4;
            margin-left: 7rem;
        }

        @media (max-width:500px) {
            >.logo {
                position: fixed;
                top: 0;
                left: 0;
                padding-top: 1.5rem;
            }

            >main {
                margin-left: 0;
                width: 100%;
            }
        }
    }
}
</style>