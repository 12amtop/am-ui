<script setup lang="ts">
import Button from '../lib/Button.vue'
const onClick = () => {
    console.log('ss');
}
</script>
<template>
    <h2>Button示例</h2>
    <h3>示例1</h3>
    <div class="am-theme-buttons">
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h3>示例2</h3>
    <div class="am-size-buttons">
        <div>
            <Button size="big">大大</Button>
            <Button size="normal">普通</Button>
            <Button size="small">小小</Button>
        </div>
        <div>
            <Button theme="link" size="big">大大</Button>
            <Button theme="link" size="normal">普通</Button>
            <Button theme="link" size="small">小小</Button>
        </div>
        <div>
            <Button theme="text" size="big">大大</Button>
            <Button theme="text" size="normal">普通</Button>
            <Button theme="text" size="small">小小</Button>
        </div>
    </div>
    <h3>示例3</h3>
    <div class="am-level-buttons">
        <div>
            <Button>默认</Button>
            <Button level="main">普通</Button>
            <Button level="danger">危险</Button>
        </div>
        <div>
            <Button theme="link">默认</Button>
            <Button theme="link" level="main">普通</Button>
            <Button theme="link" level="danger">危险</Button>
        </div>
        <div>
            <Button theme="text">默认</Button>
            <Button theme="text" level="main">普通</Button>
            <Button theme="text" level="danger">危险</Button>
        </div>
    </div>
    <h3>示例4</h3>
    <div class="am-disabled-button">
        <Button disabled>禁用按钮</Button>
    </div>
    <h3>示例5</h3>
    <div class="am-loading-button">
        <Button loading>loading</Button>
    </div>
</template>
<style lang="scss" scoped>
.am-theme-buttons {
    display: flex;
    align-items: center;
}

.am-size-buttons div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.am-level-buttons div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>