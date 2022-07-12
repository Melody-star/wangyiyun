<template>
    <div class="swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swipeData" :key="item.Key"><img :src="item.pic" /></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getBanner } from '../api/index'

export default {
    data() {
        return {
            swipeData: [
                { pic: "" },
            ],
        };
    },
    async mounted() {
        let res = await getBanner();
        this.swipeData = res.data.banners;
    },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.my-swipe {
    height: 2.6rem;
    width: 7rem;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
}

.swipe {
    display: flex;
    justify-content: center;
}

img {
    width: 100%;
    height: 100%;
}
</style>
