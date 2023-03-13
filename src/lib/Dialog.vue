<script setup lang="ts">
import Button from './Button.vue'
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    closeOnOverlay: {
        type: Boolean,
        default: true
    },
    confirm: Function,
    cancel: Function
})
const emit = defineEmits(['update:value'])
const close = () => {
    emit('update:value', !props.visible)
}
const onClickOverlay = () => {
    if (props.closeOnOverlay) {
        close()
    }
}
const confirm = () => {
    if (props.confirm?.() !== false) {
        close()
    }
}
const cancel = () => {
    close()
}
</script>
<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="am-dialog-overlay" @click.self="onClickOverlay">
                <div class="am-dialog-wrapper">
                    <div class="am-dialog">
                        <header>
                            <slot name="title"></slot>
                            <span class="am-dialog-close" @click="close"></span>
                        </header>
                        <main>
                            <slot name="content"></slot>
                        </main>
                        <footer>
                            <Button level="main" @click="confirm">confirm</Button>
                            <Button @click="cancel">cancel</Button>
                        </footer>
                    </div>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<style lang="scss">
.am-dialog {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 1px 2px 3px black;
    min-width: 30rem;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, .5);
        z-index: 10;
    }

    &-wrapper {
        padding: 2rem 4rem;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: .5rem 2rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    >main {
        color: red;
        padding: 2rem 3rem;
    }

    >footer {
        margin-top: 2rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 10rem;
        cursor: pointer;
        transition: all .25s linear;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: .1rem;
            background-color: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &:hover {
            transform: rotate(180deg);
        }
    }

}
</style>