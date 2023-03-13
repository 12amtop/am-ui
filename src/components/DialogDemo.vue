<script setup lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue"
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog"
const visible = ref(false)
const confirm = () => {
    console.log('confirm')
}
const cancel = () => {
    console.log('cancel')
}
const showDialog = () => {
    openDialog({
        title: '标题',
        content: '内容'
    })
}
</script>

<template>
    <h3>示例1</h3>
    <Dialog :visible="visible" v-model:value="visible" :closeOnOverlay="true" :confirm="confirm" :cancel="cancel">
        <template v-slot:title>
            <strong>标题</strong>
        </template>
        <template v-slot:content>
            <strong>内容1</strong>
            <strong>内容2</strong>
        </template>
    </Dialog>
    <Button @click="visible = !visible">show</Button>
    <h3>示例2</h3>
    <Button @click="showDialog">show</Button>
</template>

<style scoped lang="scss"></style>
