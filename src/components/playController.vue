<template>
    <div class="playController" @click="showMusicChange">
        <img :src="playlist[playCurrentIndex].al.picUrl">
        <div class="title">
            <span class="song">{{ playlist[playCurrentIndex].al.name }}</span>
            <span class="sing">{{ '-' + playlist[playCurrentIndex].ar[0].name }}</span>
        </div>
        <svg v-show="paused" class="icon bofang" aria-hidden="true" @click="play">
            <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" @click="play">
            <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-24gf-playlistHeart"></use>
        </svg>
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
    <playMusic :msg="showMusic"></playMusic>
</template>

<script>
import { mapState } from 'vuex'
import playMusicVue from './playMusic.vue';

export default {
    data() {
        return {
            paused: true,
            showMusic: false
        }
    },
    methods: {
        showMusicChange() {
            this.showMusic = true;
        },
        play() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.paused = false;
            } else {
                this.$refs.audio.pause();
                this.paused = true;
            }
        }
    },
    computed: {
        ...mapState(['playlist', 'playCurrentIndex'])
    }
}
</script>

<style lang="less" scoped>
.playController {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 1.3rem;
    background-color: white;

    .bofang {
        position: absolute;
        left: 5.4rem;
    }

    .liebiao {
        position: absolute;
        left: 6.5rem;
    }

    img {
        width: 1rem;
        border-radius: 50%;
        margin-left: 0.25rem;
        // animation: rotation 3s linear infinite;
    }

    .title {
        width: 4rem;
        height: 0.5rem;
        overflow: hidden;

        .song {
            font-size: 0.34rem;
            margin-left: 0.2rem;
        }
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
}
</style>