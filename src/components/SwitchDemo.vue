<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
let value = ref(false)
const disActive = () => {
    value = ref(false)
}
</script>
<template>
    <div>
        {{ value }}
        <h2>Switch组件示例</h2>
        <div class="demo">
            <h3>常规用法</h3>
            <div class="demoComponent">
                <Switch disabled @disActive="disActive" v-model:value="value" class="switch" :textTip="true"></Switch>
                <Button class="button">源码</Button>
        </div>
        <div class="demoAction">
            <div class="demoCode">
                1234444
            </div>
        </div>
    </div>
</div>
<!-- <div>
        <div class="demo">
            <h3>常规用法</h3>
                                <div class="demoComponent">
                                                                    <Switch v-model:value="value" class="switch"></Switch>
                                                                                                                            <Button class="button">源码</Button>
                                                                                                                        </div>
                                                                                                                        <div class="demoAction">
                                                                                                                                    <div class="demoCode">
                                                                                                                                        1234444
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div> -->
</template>

<style lang="scss" scoped>
.demo {
    margin: 4rem 1rem;

    >h3 {
        padding: .8rem 2rem;
        border: 1px solid #ccc;
        border-bottom: none;
    }

    >.demoComponent {
        padding: 0 1rem;
        border: 1px solid #ccc;
        border-bottom: none;

        >.switch {
            margin-top: 1.2rem;
        }

        >.button {
            padding: 1.8rem 0;
        }
    }

    >.demoAction {
        border: 1px solid#ccc;
        border-top: 1px dotted #ccc;
    }
}
</style>