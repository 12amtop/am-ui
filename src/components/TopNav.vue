<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.topNav {
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    .logo {
        margin-left: 1rem;
    }

    .menu {
        // background-color: red;
        display: flex;
        justify-content: stretch;
        margin-right: 1rem;

        li {
            margin-left: 1rem;
        }
    }
}</style>