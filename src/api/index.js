import axios from 'axios'

//获取轮播图
//type:资源类型,对应以下类型,默认为 0 即 PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(){
    return axios.get('http://110.40.210.35:3000/banner?type=2')
}

//获取推荐歌单
export function getMusicList(){
    return axios.get('http://110.40.210.35:3000/personalized?limit=10')
}

//获取歌单列表
export function getPlaylistDetail(id){
    return axios.get(`http://110.40.210.35:3000/playlist/detail?id=${id}`)
}