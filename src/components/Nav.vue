<template>
    <div class="nav">
        <div class="left">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
        <div class="center">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.2rem;
}

.active {
    font-weight: 900;
}

.center {
    font-size: 18px;
    width: 5rem;
    display: flex;
    justify-content: space-around;
}
</style>
