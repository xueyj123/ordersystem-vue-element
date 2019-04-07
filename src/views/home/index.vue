<template>
  <div id="home" class="home height-100">
    <SlideBar class="fl slide-bar"></SlideBar>
    <router-view class="height-100 fl home-router-view"></router-view>
  </div>
</template>

<script>
import SlideBar from "./components/slideBar";
export default {
  name: "home",
  components: {
    SlideBar
  }
};
</script>

<style lang='scss' scoped>
.home {
  .slide-bar {
    width: 100px;
  }
  .home-router-view {
    width: 1100px;
  }
}
</style>
