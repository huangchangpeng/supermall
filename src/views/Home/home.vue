<template>
  <div id="home">
    <NavBer class="nome_nav" :itemColour="itemColour">
      <div slot="center">购物街</div>
    </NavBer>

    <!-- TODO: 轮播图 -->
    <van-swipe
      class="my-swipe"
      @change="getIndex"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="(item, index) in goods['pop'].list"
        :key="index"
        @click="onChange(index)"
      >
        <img class="imgBanner" :src="item.coverImg" alt="" srcset=""
      /></van-swipe-item>
    </van-swipe>

    <!-- 推荐信息 -->
    <div class="recommend">
      <div class="recommendBox" v-for="item in recommend" :key="item.index">
        <a :href="item.link">
          <img :src="item.coverImg" alt="" />
          <p>{{ item.text }}</p>
        </a>
      </div>
    </div>

    <!-- 分隔条 -->
    <div class="splitBar"></div>

    <!-- 本周流行 -->
    <div class="popularWeek">
      <div class="thisWeek">本周流行</div>
      <div class="popularWeek_title">
        <div
          class="popularWeekBox"
          v-for="item in popularWeek"
          :key="item.index"
        >
          <a :href="item.link">
            <img :src="item.coverImg" alt="" />
            <p>{{ item.text }}</p>
          </a>
        </div>
      </div>
    </div>

    <!-- 首页二级导航 -->
    <TabControl
      class="tabControl"
      :titles="titles"
      @switchType="switchType"
    ></TabControl>

    <!-- 首页商品列表 上拉加载 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="geMilltHomeGoods('pop')"
    >
      <GoodsList :goods="goods.pop.list"></GoodsList>
    </van-list>
  </div>
</template>

<script>
// TODO: 头部 navber
import NavBer from "components/common/navbar/NavBar.vue";
// TODO: 首页二级导航
import TabControl from "components/content/tabControl.vue";
// TODO: 首页商品列表
import GoodsList from "components/content/goodsList.vue";
import axios from "axios";
// import { get } from "../../utils/request.js";
export default {
  name: "home",
  data() {
    return {
      title: "首页",
      banner: [],
      recommend: [],
      popularWeek: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
      },
      loading: false,
      finished: false,

      colour: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#009688",
      ],
      itemColour: "",
    };
  },

  components: {
    NavBer,
    TabControl,
    GoodsList,
  },

  methods: {
    // TODO: 子组件传递过来的数据
    switchType(val) {
      console.log(val);
    },

    // 轮播图对应的颜色值
    getIndex(index) {
      this.itemColour = this.colour[index];
    },

    onChange(index) {
      this.$router.push({
        path: "/Live",
        query: { bannerIndex: index },
      });
    },

    // TODO: 本周流行
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      this.$commonGet("/api/v1/products", {
        params: {
          per: "10",
          page: page,
        },
      })
        .then((res) => {
          this.popularWeek = res.products.slice(0, 4);
          this.popularWeek.map((a) => {
            a.text = "妖孽法师";
          });

          // TODO: 金刚区
          this.recommend = res.products.slice(0, 4);
          this.recommend.map((a) => {
            a.text = "符文法师";
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // TODO: 下面列表
    geMilltHomeGoods(type) {
      const page = this.goods["pop"].page + 1;
      this.$commonGet("/api/v1/products", {
        params: {
          page: page,
          per: 0,
        },
        headers: {},
      })
        .then((res) => {
          let arr = [];
          if (res.products.length > 0) {
            arr = res.products;
          } else {
            arr.push(res.products);
          }

          // TODO: 向数组追加 数据并合并
          this.goods["pop"].list = (type ? [] : this.goods["pop"].list).concat(
            arr
          );

          if (this.goods.pop.list.length < 10) {
            this.finished = true;
          } else {
            this.finished = false;
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // TODO: 登录接口
    getHomeLogin() {
      this.$commonPost("/api/v1/auth/login", {
        userName: "xiaoming",
        password: "111111",
      })
        .then((res) => {
          this.$toast({
            message: res.message,
            duration: 2000,
          });
        })
        .catch((err) => {
          this.$toast({
            message: err,
            duration: 2000,
          });
        });
    },
  },

  created() {
    this.getHomeLogin();
    this.getHomeGoods("pop");
    this.geMilltHomeGoods(true);
  },
};
</script>
<style scoped lang="less">
#home {
  padding-top: 0.88rem;
  padding-bottom: 1rem;
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

.my-swipe .van-swipe-item {
  /* color: #fff;  */
  width: 100%;
  font-size: 0.2rem;
  line-height: 3rem;
  text-align: center;
  /* background-color: #39a9ed; */
}
.imgBanner {
  width: 100%;
  height: 3rem;
}

/* 推荐 */
.recommend {
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  .thisWeek {
    width: 100%;
    height: 2.4rem;
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
        width: 0.8rem;
        height: 0.8rem;
      }
      p {
        font-size: 0.14rem;
        margin-top: 0.1rem;
      }
    }
  }
}
// 分隔条
.splitBar {
  width: 100%;
  height: 0.2rem;
  background-color: rgb(241, 241, 241);
}

/* 本周流行 */
.popularWeek {
  width: 100%;
  margin-bottom: 0.2rem;
  .thisWeek {
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
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
          width: 1.6rem;
          height: 1.6rem;
        }
        p {
          font-size: 0.14rem;
          margin-top: 0.1rem;
        }
      }
    }
  }
}

// 首页二级导航 自动吸顶
.tabControl {
  position: sticky;
  top: 0.88rem;
}
</style>