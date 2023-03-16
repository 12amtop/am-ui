<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Aside from '../lib/Aside.vue'
</script>
<template>
    <div class="homePage">
        <div class="home">
            <TopNav></TopNav>
            <Aside class="aside"></Aside>
            <div class="banner">
                <h1>AM-UI</h1>
                <h2>一个框架</h2>
                <RouterLink to="/doc">开始</RouterLink>
                <a href="#">github</a>
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
    transition: all 2.25s;


    >.home {
        >.aside {
            display: none;
        }

        background: linear-gradient(.25turn, rgb(85, 24, 24), rgb(72, 72, 211));
        clip-path: ellipse(90% 50% at 50% 30%);

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
                width: 8rem;
                margin: 1rem;
                padding: 1rem 0;
                border-radius: .8rem;
                color: rgb(255, 255, 255);
                background: rgb(38, 141, 97);
            }
        }

        @media (max-width: 500px) {
            >.aside {
                display: block;
                z-index: 10;
                margin-top: 4rem;
            }

            >.banner {
                color: orange;
                display: grid;
                align-items: center;
                justify-content: center;

                >h1 {
                    font-size: 1.4rem;
                    color: orange;
                }

                >h2 {
                    font-size: 1rem;
                }

                >a {
                    width: 4rem;
                    margin-top: 0;
                }

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