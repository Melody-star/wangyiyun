<template>
    <van-popup v-model:show="msg" position="bottom" bind:close="onClose" closeable close-icon-position="top-left"
        close-icon="https://img1.imgtp.com/2022/07/08/fTaYkDg8.png">
        <div class='playMusic'>
            <div class="top">
                <div class="top-content">
                    <div>123515616</div>
                    <div>8</div>
                </div>
                <svg class="icon fenxiang" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
            <div class="centre">
                <img src="https://s3.music.126.net/mobile-new/img/needle-ab.png?4b81da043356110081e5ccaed2e6f2ad=">
                <img src="https://s3.music.126.net/mobile-new/img/disc-plus.png?b700b62e1971b351dcb8b8ce1c9ceea3=">
            </div>
            <div class="bottom">

            </div>
        </div>
    </van-popup>
</template>

<script>

import { ref } from 'vue';

export default {
    props: ['msg'],
    setup(props, content) {
        const show = ref(false);
        function onClose() {
            console.log("111");
        }
        return {
            show, onClose
        };
    },
};
</script>

<style lang='less' scoped>
svg {
    color: #fefefe;
}

.playMusic {
    height: 16.24rem;
    background-color: #cfcfcf;
    padding-top: 0.2rem;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;

        .top-content {
            color: #fefefe;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .fenxiang {
            position: absolute;
            right: 0.3rem;
            width: 0.4rem;
        }
    }

    .centre{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .centre :first-child {
        width: 2rem;
        animation: change 2s;
    }

    .centre :last-child {
        width: 5rem;
    }

    @keyframes change {
        from {
            transform-origin: 0 0;
            transform: rotate(0deg);
        }

        to {
            transform-origin: 0 0;
            transform: rotate(-60deg);
        }
    }

}
</style>
