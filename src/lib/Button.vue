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
        font-size: 1.2rem;
        width: 6rem;
        height: 4rem;
    }

    &.am-size-small {
        font-size: .8rem;
        width: 4rem;
        height: 2rem;
    }
}

@mixin am-level-button {
    &.am-level-main {
        color: rgb(20, 145, 177);
    }

    &.am-level-danger {
        color: red;
    }
}

.am-button {
    border: none;
    cursor: pointer;
    height: 3rem;
    width: 6rem;
    margin-left: 1rem;
    background-color: transparent;
    font-size: 1rem;

    &.am-theme-button {
        background-color: rgb(152, 194, 232);
        border-radius: .4rem;
        box-shadow: 4px 1px 2px fade_out(black, 0.95);
        @include am-size-button;

        &.am-level-main {
            background: rgb(148, 113, 113);
        }

        &.am-level-danger {
            background-color: red;
        }

        &:hover {
            opacity: .8;
            transition: all .25s linear;
        }

        &:focus {
            outline: none;
            background-color: #3e8fbe;
            color: white;
        }

        &[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
            color: gray;

            &:hover {
                background-color: #ccc;
                opacity: 1;
            }
        }

        &.am-loading {
            background-color: #ccc;

            &:hover {
                background: #ccc;
                opacity: 1;
            }

            &:focus {
                background-color: #ccc;
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
        color: #46ad5e;
        @include am-size-button;
        @include am-level-button;

        &:hover {
            color: rgb(219, 149, 18);
        }

        &:focus {
            color: rgb(114, 16, 9);
        }

    }

    &.am-theme-text {
        @include am-size-button;
        @include am-level-button;

    }


}
</style>