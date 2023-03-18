<script setup lang="ts">
import { onMounted } from 'vue';
import TopNav from '../components/TopNav.vue'
import Aside from '../lib/Aside.vue'
const width = document.documentElement.clientWidth;
onMounted(() => {
    const aside = document.querySelector('.aside')
    if (aside) {
        aside.style.display = (width > 500 ? 'none' : 'block')
    }
})
</script>
<template>
    <div class="homePage">
        <Aside class="aside"></Aside>
        <div class="home">
            <TopNav></TopNav>
            <div class="banner">
                <h1>AM-UI</h1>
                <h2>一个框架</h2>
                <RouterLink to="/doc">
                    <h3>start</h3>
                </RouterLink>
                <div class="authors">
                    <i-bi-github class="authorPage"></i-bi-github>
                    <i-bi-github class="authorPage"></i-bi-github>
                </div>
            </div>
        </div>
        <ul class="intro">
            <li>
                <i-vscode-icons-file-type-vue class="icon" />
                <h3>基于vue3</h3>
                <p>使用了了vue3的api</p>
            </li>
            <li>
                <i-vscode-icons-file-type-typescript-official class="icon" />
                <h3>基于TypeScript</h3>
                <p>使用TypeScript书写</p>
            </li>
            <li>
                <i-fxemoji-lightbulb class="icon" />
                <h3>代码易读</h3>
                <p>每个组件代码简洁</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.homePage {

    >.aside {
        z-index: 13;
        margin-top: 4rem;
    }

    >.home {
        clip-path: ellipse(90% 50% at 50% 30%);
        background: rgb(238, 174, 202);
        background: linear-gradient(238deg, rgba(238, 174, 202, 1) 0%, rgba(187, 173, 185, 1) 57%, rgba(148, 187, 233, 1) 100%);


        >.banner {
            text-align: center;
            width: 100%;
            padding: 10rem;
            color: rgb(255, 255, 255);

            >h2 {
                margin-bottom: 2rem;
            }

            >a {
                display: inline-block;
                margin: 1rem;
                padding: .6rem 0;
                border-radius: .8rem;
                color: rgb(98, 128, 59);
                background: rgba(255, 255, 255, .4);
            }
        }


        >.banner {
            display: grid;
            align-items: center;
            justify-content: center;

            >h1 {
                font-size: 1.4rem;
            }

            >h2 {
                font-size: 1rem;
            }

            >a {
                width: 5rem;
                height: auto;
                margin-top: 0;
            }

            >.authors {
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                >.authorPage {
                    color: rgb(1, 0, 11);
                    cursor: pointer;
                }
            }


        }

        @media (max-width: 500px) {

            >a {
                width: 4rem;
                margin-top: 0;
            }
        }
    }

    >.intro {
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;


        >li {
            width: 20rem;
            display: grid;
            justify-content: start;
            align-items: space-between;
            grid-template-areas: "a b" "a c";
            grid-template-columns: 5rem auto;
            grid-template-rows: 2rem auto;

            >.icon {
                grid-area: a;
                font-size: 3rem;
            }

            >h3 {
                grid-area: b;
            }

            >p {
                grid-area: c;
            }
        }

        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            >li {
                margin-top: 2rem;
            }
        }

    }
}
</style>