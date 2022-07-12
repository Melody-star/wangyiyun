<template>
    <div class="musicList">
        <div class="top">
            <span class="recommend">推荐歌单</span>
            <span class="more">更多></span>
        </div>
        <div class="bottom">
            <van-swipe :loop="false" :width="120" :show-indicators="false" class="my-swipe">
                <van-swipe-item v-for="item in musicData" :key="item.key" class="swipe-item">
                    <router-link :to="{ path: '/listView', query: { id: item.id } }">
                        <img :src="item.picUrl">
                        <div class="itemName">{{ item.name }}</div>
                        <div class="playCount">{{ getplayCount(item.playCount) }}</div>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import { getMusicList } from '../api/index'

export default {
    data() {
        return {
            musicData: [
                { name: '', picUrl: '' },
            ],
        };
    },
    async mounted() {
        let res = await getMusicList();
        this.musicData = res.data.result;

    },
    methods: {
        getplayCount(num) {
            let res = 0;
            if (num >= 100000000) {
                res = num / 100000000;
                res = res.toFixed(2) + '亿';
            } else if (num >= 10000) {
                res = num / 10000;
                res = res.toFixed(2) + '万';
            }
            return res;
        }
    }
};
</script>

<style lang="less" scoped>
.musicList {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    height: 2rem;
}

.recommend {
    float: left;
    font-weight: 550;
}

.more {
    float: right;
    font-size: 0.2rem;
}

.my-swipe {
    font-size: 0.1rem;
}

.top {
    height: 0.6rem;
}

img {
    width: 2rem;
    border-radius: 0.2rem;
}

.playCount {
    position: absolute;
    right: 0.3rem;
    top: 0.1rem;
    z-index: 10; //置顶
    color: white;
}

.swipe-item {
    position: relative;
}

.itemName {
    height: 0.7rem;
    width: 100%;
}
</style>