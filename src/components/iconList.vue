<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <img src="../../public/收音机.png">
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <img src="../../public/排行榜.png">
            <span>排行榜</span>
        </div>
        <div class="iconItem">
            <img src="../../public/直播.png">
            <span>直播</span>
        </div>
    </div>
    <van-divider class="divider"/>
</template>

<style lang="less" scoped>
img {
    width: 0.8rem;
    height: 0.8rem;
}

.icon {
    width: 0.8rem;
    height: 0.8rem;
}

.iconList {
    display: flex;
    justify-content: space-between;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-bottom: 0.2rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span{
        font-size: 0.18rem;
        padding-top: 0.1rem;
    }
}

.divider{
    margin: 0;
}
</style>

