<template>
    <listViewTopVue :playlist="state.playlist"></listViewTopVue>
    <listViewCentreVue :playlist="state.playlist" />
    <playListVue :playlist="state.playlist" />
</template>

<script>
//setup写法
import listViewTopVue from './listViewTop.vue';
import listViewCentreVue from './listViewCentre.vue';
import playListVue from './playList.vue';
import { useRoute } from 'vue-router'
import { getPlaylistDetail } from '../../api/index'
import { reactive, onMounted } from 'vue';
import store from '../../store';

export default {
    setup() {
        const route = useRoute();
        let state = reactive({
            list: [], playlist: {
                creator: {}, tracks: [{ ar: ["name"], al: {} }], trackIds: []
            }
        });
        onMounted(async () => {
            let id = route.query.id;
            // console.log(id);
            let result = await getPlaylistDetail(id);
            // console.log(result);
            state.playlist = result.data.playlist;
            // console.log(state.playlist);
            store.commit('setPlaylist', state.playlist.tracks);
        })
        return {
            state
        }
    },
    components: {
        listViewTopVue, listViewCentreVue, playListVue
    }
}
</script>

<style lang="less" scoped>
</style>