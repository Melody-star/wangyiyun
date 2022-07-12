<template>
    <van-tabbar v-model="active" active-color="#dd001b">
        <van-tabbar-item>
            <span style="left: 0.5rem;">发现</span>
            <template #icon="props">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yinle4"></use>
                </svg>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span style="left: 2rem;">播客</span>
            <template #icon="props">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guangbo"></use>
                </svg>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span style="left: 3.5rem;">我的</span>
            <template #icon="props">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yinle"></use>
                </svg>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span style="left: 5rem;">关注</span>
            <template #icon="props">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-peoples"></use>
                </svg>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span style="left: 6.5rem;">云村</span>
            <template #icon="props">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-M"></use>
                </svg>
            </template>
        </van-tabbar-item>
    </van-tabbar>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const active = ref(0);
        return { active };
    },
};

</script>

<style lang="less" scoped>
.icon {
    width: 0.6rem;
}

span {
    position: absolute;
    top: 0.8rem;
}

.van-tabbar{
    height: 60px;
}
</style>