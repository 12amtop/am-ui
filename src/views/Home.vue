<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
</script>
<template>
    <div class="top">
        <TopNav></TopNav>
        <div class="banner">
            <h1>AM-UI</h1>
            <h2>一个框架</h2>
            <RouterLink to="/doc">开始</RouterLink>
            <a href="#">github</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.banner {
    text-align: center;
    margin-top: 12rem;

    >h2 {
        margin-bottom: 5rem;
    }

    >a {
        border: 1px solid #ccc;
        margin: 1.5rem;
        padding: .8rem;
        border-radius: 20%;
        background-color: bisque;
    }
}</style>