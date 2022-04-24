<template>
  <div class="home">
    <Navbar :itemColour="itemColour" class="nome_nav"
      ><div
        slot="left"
        v-if="hideLeft"
        class="navBar_left"
        @click="onClickLeft"
      >
        <van-icon name="arrow-left" />
      </div>
      <div slot="center">直播</div>
      <div slot="right" v-if="hideLeft" @click="goClass">分类</div></Navbar
    >
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar.vue";
export default {
  name: "live",
  components: {
    Navbar,
  },
  data() {
    return {
      scroll: null,
      hideLeft: false,
      itemColour: "#0cbd82",
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 93vh;
  background: #f5f5f5;
  padding-bottom: 1.08rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
}

/* 设置 navber 在当前组件的展现样式 */
.nome_nav {
  width: 100%;
  background-color: rgb(12, 189, 130);
  color: #fff;
  font-weight: 600;
  font-size: 0.34rem;
  position: fixed;
  z-index: 999;
  top: 0;
}
</style>
