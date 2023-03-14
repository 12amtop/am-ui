<script setup lang="ts">
import { onMounted, onUpdated, ref, useSlots } from 'vue';

const props = defineProps({
    selectedTabTitle: {
        type: String,
    }
})
const slots = useSlots()
const defaults = slots.default!()
const titles = defaults.map((t) => {
    return t.props!.title;
})
const emit = defineEmits(['update:selectedTabTitle'])
const toggle = (t: String) => {
    emit('update:selectedTabTitle', t)
}
const selectedItem = ref<HTMLElement | Element>(null!)
const indicator = ref<HTMLDivElement>(null!)
const container = ref<HTMLDivElement>(null!)
const indicatorComputed = () => {
    const { width } = selectedItem.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'
    const { left: left1 } = container.value.getBoundingClientRect()
    const { left: left2 } = selectedItem.value.getBoundingClientRect()
    indicator.value.style.left = left2 - left1 + 'px'
}
onMounted(() => {
    indicatorComputed()
})
onUpdated(() => {
    indicatorComputed()
})
</script>
<template>
    <div class="am-tabs">
        <div class="am-tabs-nav" ref="container">
            <div class="am-tabs-nav-item " :ref="el => { if (t === selectedTabTitle) selectedItem = el }"
                :class="{ selected: t === selectedTabTitle }" v-for="(t, index) in titles" :key="index" @click="toggle(t)">
                {{ t }}
            </div>
            <div class="am-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="am-tabs-content">
            <component class="am-tabs-content-item" :class="{ selected: c.props!.title === selectedTabTitle }"
                v-for="(c, index) in defaults" :is="c" :key="index"></component>
        </div>
    </div>
</template>

<style lang="scss">
.am-tabs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 2px 10px #1b0303;
    padding-bottom: 10rem;

    &-nav {
        display: flex;
        border-bottom: 1px solid #ccc;
        box-shadow: 1px 2px 10px fade_out(black, .3);
        position: relative;

        &-item {
            margin-left: 2rem;
            cursor: pointer;
            text-align: center;

            &.selected {
                color: rgb(28, 148, 58);
            }
        }

        &-indicator {
            transition: all .25s;
            position: absolute;
            left: 0rem;
            bottom: -.1rem;
            height: .2rem;
            background: green;
        }
    }

    &-content {
        padding: 1rem 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }
    }
}
</style>