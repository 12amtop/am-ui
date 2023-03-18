<script setup lang="ts">

const toggle = () => {
    emit('update:value', !props.value)
}
const props = defineProps({
    value: Boolean,
    disabled: Boolean,
    textTip: Boolean,
})
const emit = defineEmits(['update:value', 'disActive'])
let s = props.textTip ? true : false
props.disabled ? emit('disActive') : null
</script>
<template>
    <button class="am-switch" @click="toggle" :class="{ 'am-checked': value, 'disabled': disabled }">
        <div id="textTips" v-if="s">
            <span v-if="value" id="onTips">on</span>
            <span v-if="!value" id="offTips">off</span>
        </div>
        <div id="iconTips"></div>
    </button>
</template>

<style lang="scss">
$h: 2rem;
$h2: $h - .2rem;

.am-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: $h;
    position: relative;
    cursor: pointer;
    z-index: 10;

    &:focus {
        outline: none;
    }

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
        transition: all .25s ease-in;
        z-index: 1;
    }

    &.am-checked {
        background-color: rgb(108, 175, 224);

        >#iconTips {
            left: calc(100% - #{$h2} - .1rem);
        }
    }

    &.disabled {
        cursor: not-allowed;
        opacity: .3;
    }
}
</style>