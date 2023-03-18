<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
    theme: {
        type: String,
        default: 'button'
    },
    size: {
        type: String,
        default: 'normal'
    },
    level: {
        type: String,
        default: 'normal'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const classes = computed(() => {
    return {
        [`am-theme-${props.theme}`]: props.theme,
        [`am-size-${props.size}`]: props.size,
        [`am-level-${props.level}`]: props.level,
        [`am-loading`]: props.loading
    }
})

</script>
<template>
    <div>
        <button class="am-button" :class="classes" :disabled="disabled">
            <span v-if="loading" class="am-loadingIndicator"></span>
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss">
@mixin am-size-button {
    &.am-size-big {
        font-size: 1.5rem;
        width: 8rem;
        height: 4rem;
    }

    &.am-size-small {
        font-size: .5rem;
        width: 4rem;
        height: 2rem;
    }
}

@mixin am-level-button {
    &.am-level-main {
        color: rgb(53, 160, 187);
    }

    &.am-level-danger {
        color: rgb(182, 45, 45);
    }
}

.am-button {
    border: none;
    cursor: pointer;
    height: 2.5rem;
    width: 5rem;
    background-color: transparent;
    font-size: 1rem;
    outline: none;

    &.am-theme-button {
        background-color: #91a7b357;
        border-radius: .5rem;
        box-shadow: 8px 2px 8px fade_out(black, 0.9);
        @include am-size-button;


        &.am-level-main {
            background: rgb(114, 105, 158);
        }

        &.am-level-danger {
            background-color: rgb(236, 53, 53);
            color: white;
        }

        &:hover {
            opacity: .8;
            transition: all .25s linear;
        }

        &:focus {
            border: 1px solid rgb(147, 174, 206);
        }

        &[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
            color: gray;
        }

        &.am-loading {
            background-color: #91a7b357;

            &:focus {
                color: black;
            }

            & .am-loadingIndicator {
                border: .2px dotted black;
                border-top: .2rem dotted #b81111;
                width: .8rem;
                height: .8rem;
                display: inline-block;
                border-radius: 50%;
                margin-right: .5rem;
                animation: loading 1s infinite linear;

                @keyframes loading {
                    0% {
                        transform: rotate(0deg);
                    }

                    25% {
                        transform: rotate(90deg);
                    }

                    50% {
                        transform: rotate(180deg);
                    }

                    75% {
                        transform: rotate(270deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            }
        }


    }

    &.am-theme-link {
        color: rgb(14, 128, 118);
        @include am-size-button;
        @include am-level-button;

        &:hover {
            opacity: .8;
        }

        &:focus {
            color: #46ad5e;
        }

    }

    &.am-theme-text {
        @include am-size-button;
        @include am-level-button;

    }


}
</style>