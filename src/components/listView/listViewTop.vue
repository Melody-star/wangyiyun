<template>
    <div class="listViewTop">
        <router-link :to="{ path: '/' }">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xitongfanhui"></use>
            </svg>
        </router-link>

        <span class="TopName">歌单</span>

        <svg class="icon sousuo" aria-hidden="true">
            <use xlink:href="#icon-sousuo-copy"></use>
        </svg>

        <svg class="icon gengduo" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
        </svg>
        <img :src="playlist.coverImgUrl" class="coverImgUrl">
        <img :src="playlist.coverImgUrl" class="cover">
        <div class="infor">
            <div>{{ playlist.name }}</div>
            <svg class="icon xiala" aria-hidden="true">
                <use xlink:href="#icon-xialajiantouxiao"></use>
            </svg>
            <img :src="playlist.creator.avatarUrl" class="avatarUrl">
            <div class="nickname">{{ playlist.creator.nickname }}</div>
            <div class="description">{{ playlist.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['playlist']
}
</script>

<style lang="less" scoped>
.listViewTop {
    // background-color: aqua;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
}

.TopName {
    color: white;
    font-size: 0.4rem;
    margin-left: 0.3rem;
}

.sousuo {
    margin-left: 4rem;
    width: 0.45rem;
}

.gengduo {
    margin-left: 0.4rem;
}

.coverImgUrl {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
}

.cover {
    position: fixed;
    left: 0.2rem;
    top: 1.4rem;
    width: 2.4rem;
    border-radius: 0.2rem;
}

.infor {
    // border: 1px solid red;
    position: fixed;
    left: 2.9rem;
    top: 1.5rem;
    height: 2.3rem;
    width: 3.614rem;
    color: white;
    line-height: 0.5rem;
    font-size: 0.32rem;
}

.xiala {
    position: fixed;
    right: 0.4rem;
    top: 1.4rem;
    width: 0.45rem;
}

.avatarUrl {
    position: absolute;
    top: 1.2rem;
    width: 0.5rem;
    border-radius: 1rem;
}

.nickname {
    font-size: 0.1rem;
    position: absolute;
    top: 1.2rem;
    left: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
}

.description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.1rem;
    width: 4.4rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    position: absolute;
    top: 1.9rem;
}
</style>