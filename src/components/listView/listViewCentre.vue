<template>
    <div class="listViewCentreVue">
        <div class="a">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
            </svg>
            <span>{{ getplayCount(playlist.subscribedCount) }}</span>
        </div>
        |
        <div class="a">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
            </svg>
            <span>{{ playlist.commentCount }}</span>
        </div>
        |
        <div class="a">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{ playlist.shareCount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getplayCount(num) {
            let res = 0;
            if (num >= 100000000) {
                res = num / 100000000;
                res = res.toFixed(1) + '亿';
            } else if (num >= 10000) {
                res = num / 10000;
                res = res.toFixed(1) + '万';
            }
            return res;
        }
    },
    props: ['playlist']
}
</script>

<style lang="less" scoped>
.listViewCentreVue {
    z-index: 10;
    position: absolute;
    top: 4.3rem;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    width: 5.5rem;
    height: 0.7rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 1px 10px #888888;
    .a {
        display: flex;
        align-items: center;

        span {
            padding-left: 0.1rem;
        }
    }

    .icon {
        width: 0.35rem;
    }
}
</style>

