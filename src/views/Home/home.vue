<template>
  <div>
    <NavBer class="nome_nav">
      <div slot="center">购物街</div>
    </NavBer>
    <!-- TODO: 轮播图 -->
    <van-swipe
      class="my-swipe"
      :height="172"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="(item, index) in banner"
        :key="index"
        @click="onChange(index)"
      >
        <img class="imgBanner" :src="item.image" alt="" srcset=""
      /></van-swipe-item>
    </van-swipe>

    <!-- 推荐信息 -->
    <div class="recommend">
      <div class="recommendBox" v-for="item in recommend" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <p>{{ item.title }}</p>
        </a>
      </div>
    </div>

    <!-- 分隔条 -->
    <div class="splitBar"></div>

    <!-- 本周流行 -->
    <div class="popularWeek">
      <div class="thisWeek">本周流行</div>
      <div class="popularWeek_title">
        <div class="popularWeekBox" v-for="item in recommend" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt="" />
            <p>{{ item.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: 头部 navber
import NavBer from "components/common/navbar/NavBar.vue";

// TODO: 请求方法
import { getHomeData } from "network/home.js";

export default {
  name: "home",
  data() {
    return {
      title: "首页",
      banner: [],
      recommend: [],
    };
  },
  components: {
    NavBer,
  },
  methods: {
    onChange(index) {
      this.$router.push({
        path: "/Live",
        query: { bannerIndex: index },
      });
    },
  },
  created() {
    getHomeData().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>
<style scoped lang="less">
/* 设置 navber 在当前组件的展现样式 */
.nome_nav {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  position: fixed;
  z-index: 999;
  top: 0;
}
.my-swipe {
  margin-top: 44px;
}
.my-swipe .van-swipe-item {
  /* color: #fff;  */
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.imgBanner {
  width: 100%;
  height: 172px;
}

/* 推荐 */
.recommend {
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  .thisWeek {
    width: 100%;
    height: 44px;
    text-align: center;
  }
  .recommend_title {
  }
  .recommendBox {
    width: 100%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
// 分隔条
.splitBar {
  width: 100%;
  height: 10px;
  background-color: rgb(241, 241, 241);
}

/* 本周流行 */
.popularWeek {
  width: 100%;
  margin-bottom: 10px;
  .thisWeek {
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
  .popularWeek_title {
    display: flex;
    .popularWeekBox {
      width: 100%;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
        }
        p {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>