<template>
  <div id="app" class="wrapper">
    <router-view></router-view>

    <!-- <MainTabbar /> -->
  </div>
</template>
<script>
// import MainTabbar from "./components/content/MainTabbar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // MainTabbar,
  },
  methods: {},

  mounted() {},
  
};
</script>
<style lang="less">
.wrapper{
    padding-top: 0.88rem;
}
</style>
