<script setup>
import PlayController from './components/playController.vue';
</script>

<template>
  <router-view></router-view>
  <PlayController></PlayController>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: '微软雅黑';
}

.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

a {
  color: black;
  text-decoration: none;
}
</style>
