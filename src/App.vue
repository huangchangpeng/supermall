<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar />
  </div>
</template>
<script>
import MainTabbar from "./components/content/MainTabbar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainTabbar,
  },
};
</script>
<style lang="less">
@import "assets/css/base.css";
</style>
