<script setup>
import { ref } from 'vue';
var f = () => {console.log('hello world')};
const n = ref(100)
defineProps({
    msg: String
})
</script>

<template>
    <div>组件一</div>
    <div>{{ msg }}</div>
    <button @click="n++">{{ n }}</button>
    <button @click="f">show msg</button>
</template>

<style>
.bar {
    color: red;
}
</style>