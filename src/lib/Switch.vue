<script setup lang="ts">
const toggle = () => {
    emit('update:value', !props.value)
}
const props = defineProps({
    value: Boolean
})
const emit = defineEmits(['update:value'])
</script>
<template>
    <button class="am-switch" @click="toggle" :class="{ 'am-checked': value }">
        <div id="textTips">
            <span v-if="value" id="onTips">on</span>
            <span v-if="!value" id="offTips">off</span>
        </div>
        <div id="iconTips"></div>
    </button>
</template>

<style lang="scss">
$h: 2rem;
$h2: $h - .2rem;

.am-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: $h;
    position: relative;
    cursor: pointer;

    >#textTips {
        font-size: .9rem;
        color: white;
        transition: all .25s linear;
        width: $h;

        >#offTips {
            position: absolute;
            top: .5rem;
            right: 1rem;
        }

        >#onTips {
            position: absolute;
            top: .5rem;
            right: 2rem;
        }
    }

    >#iconTips {
        position: absolute;
        top: .1rem;
        left: .1rem;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2;
        cursor: pointer;
        transition: all .25s ease-in;
    }

    &.am-checked {
        background-color: rgb(108, 175, 224);

        >#iconTips {
            left: calc(100% - #{$h2} - .1rem);
        }
    }
}
</style>