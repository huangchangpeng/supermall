<template>
  <div id="tab_control">
    <div
      class="tab_control_item"
      :class="{ active: index === clickItemIndex }"
      v-for="(item, index) in titles"
      :key="index"
      @click="goItemList(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      clickItemIndex: 0,
    };
  },
  methods: {
    goItemList(index) {
      this.clickItemIndex = index;
       
      // 向首页传递数据
      this.$emit("switchType", index);
    },
  },
};
</script>
<style lang="less" scoped>
#tab_control {
  display: flex;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.2rem;
  background-color: #fff;
  .tab_control_item {
    flex: 1;
  }
}

.active {
  color: red;
  span {
    padding: 0.1rem;
    border-bottom: 0.05rem solid red;
  }
}
</style>