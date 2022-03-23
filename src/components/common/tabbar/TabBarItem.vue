<template>
  <!-- 在这里监听点击事件 -->
  <div class="tab-bar-item" @click="itemClick">
    <!-- 添加一个变量，使用v-if判断是否展示 -->
    <div v-if="!isActive">
      <!-- 插槽 动态决定 图标和文字 -->
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 使用div把插槽套起来，否则样式会被插槽替换掉 
    绑定一个style属性 根据定义的变量来判断是否给文字添加样式 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  // 动态获取点击的时候的页面路由
  props: {
    path: String,

    // 接收App页面传递进来的值
    activeColor: {
      type: String,
      default: "rgb(12, 189, 130)",
    },
  },
  data() {
    return {
      userInfo: {
        nbr: 1,
      },
    };
  },
  computed: {
    isActive() {
      // route.path 判断里面有没有处于活跃的路由 ，如果有的话 isActive 就是true 其他的都是false
      // indexOf 判断成立为 true 的话 不等于 -1 判断不成立则 = -1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 动态决定字体颜色
    activeStyle() {
      // 判断当前是否是选中页面，是的话返回这个颜色。如果不是就是空
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  watch: {},
  methods: {
    itemClick() {
      // replace 是不可返回上一页面
      // push 是可以返回上一页面的
      if (this.path == "/personal" || this.path == "/video") {
        this.$router
          .push({
            path: this.path,
            query: { supNbr: this.userInfo.nbr },
          })
          .catch((err) => err);
      } else {
        this.$router.push(this.path).catch((err) => err);
      }
    },
  },
  created() {},
};
</script>
<style scoped>
/* 平均分布 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 0.08rem 0 0.08rem;
}
</style>