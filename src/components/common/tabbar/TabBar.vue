<template>
  <div id="tab-bar" v-if="exhibition">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      exhibition: true,
    };
  },
  methods: {},
  watch: {
    $route(to, from) {
      if (
        to.path == "/home" ||
        to.path == "/live" ||
        to.path == "/video" ||
        to.path == "/personal"
      ) {
        this.exhibition = true;
      } else {
        this.exhibition = false;
      }
    },
  },
};
</script>

<style>
#tab-bar {
  width: 100%;
  height: 49px;
  display: flex;
  background: #f5f5f5;

  /* 定位到底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 设置阴影 0 x 轴，-1 是 y 轴 4px 是阴影高度，rgb颜色，/ 20% 是透明度*/
  box-shadow: 0 -1px 4px rgb(100 100 100 / 20%);
}
</style>
