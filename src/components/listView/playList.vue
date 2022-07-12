<template>
    <div class="playList">
        <div class="playList-top">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-a24gf-playCircle"></use>
            </svg>
            <span class="bofang">播放全部</span>
            <span class="num">({{ playlist.trackIds.length }})</span>
            <svg class="icon download" aria-hidden="true">
                <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
            </svg>
            <svg class="icon select" aria-hidden="true">
                <use xlink:href="#icon-duoxuan"></use>
            </svg>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item, i) in playlist.tracks" :key="item.id" @click="setPlayIndex(i)">
                <span>{{ i + 1 }}</span>
                <div class="conten">
                    <div class="title">{{ item.name }}</div>
                    <div class="sing">{{ item.ar[0].name }}-{{ item.al.name }}</div>
                </div>
                <svg class="icon you" aria-hidden="true">
                    <use xlink:href="#icon-gengduo"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['setPlayIndex'])
    },
    props: ['playlist']
}
</script>

<style lang="less" scoped>
.playList {
    background-color: white;
    width: 100%;
    position: absolute;
    top: 4.6rem;
    padding-left: 0.2rem;

    .playList-top {
        margin-top: 0.6rem;
        display: flex;
        align-items: center;

        .bofang {
            font-weight: 600;
            font-size: 0.35rem;
            margin-left: 0.2rem;
        }

        .num {
            margin-left: 0.1rem;
            font-size: 0.2rem;
        }

        .icon {
            width: 0.5rem;
        }

        .download {
            margin-left: 2.8rem;
        }

        .select {
            margin-left: 0.4rem;
        }
    }

    .playItem {
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        // border: 1px solid red;
        display: flex;
        align-items: center;

        span {
            margin-left: 0.1rem;
            font-size: 0.35rem;
            color: rgb(146, 146, 146);
        }

        .conten {
            margin-left: 0.3rem;

            .title {
                font-size: 0.35rem;
            }

            .sing {
                font-size: 0.15rem;
            }
        }

        .you {
            position: absolute;
            right: 0.3rem;
        }
    }
}
</style>