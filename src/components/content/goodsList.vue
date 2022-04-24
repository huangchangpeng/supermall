<template>
  <div class="goodsList">
    <div class="list" v-for="item in goods" :key="item._id">
      <div class="listItem" @click="goCommDetails">
        <img :src="item.coverImg" alt="" srcset="" />
        <div class="msg">
          <div>{{ item.name }}</div>
          <div>￥{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    goCommDetails() {
      this.$router.push({
        path: "/CommDetails",
        query: {},
      });
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.list {
  // height: 1rem;
  margin: 0.2rem 0 0.2rem 0;
  .listItem {
    border: 0.02rem solid #e2e2e2;
    // height: 10rem;
    display: flex;
    margin: 0rem 0.2rem 0rem 0.2rem;
    img {
      width: 2rem;
      height: 2rem;
      margin: 0.2rem;
      border: 0.01rem solid #e2e2e2;
    }
    .msg {
      margin-left: 0.24rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 0.2rem;
      div:nth-child(1) {
        font-size: 0.28rem;
      }
      div:nth-child(2) {
        color: red;
        font-weight: 600;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>