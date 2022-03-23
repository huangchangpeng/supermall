<template>
<!-- 修改组件文字图片，文字颜色 -->
  <tab-bar>
      <tab-bar-item path='/home' activeColor='rgb(12, 189, 130)'>
        <img slot="item-icon" src="@/assets/image/tabbarimg/HomePage.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/image/tabbarimg/HomePageSelected.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path='/live' activeColor='rgb(12, 189, 130)'>
        <img slot="item-icon" src="@/assets/image/tabbarimg/LiveBroadcast.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/image/tabbarimg/LiveBroadcastSelected.png" alt=""/>
        <div slot="item-text">直播</div>
      </tab-bar-item>

      <tab-bar-item path='/video' activeColor='rgb(12, 189, 130)'>
        <img slot="item-icon" src="@/assets/image/tabbarimg/Video.png" alt="" />
        <img slot="item-icon-active" src="@/assets/image/tabbarimg/VideoSelected.png" alt=""/>
        <div slot="item-text">短视频</div>
      </tab-bar-item>

      <tab-bar-item path='/personal' activeColor='rgb(12, 189, 130)'>
        <img slot="item-icon" src="@/assets/image/tabbarimg/PersonalCenter.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/image/tabbarimg/PersonalCenterSelected.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "../../components/common/tabbar/TabBar.vue";
import TabBarItem from "../../components/common/tabbar/TabBarItem.vue";

export default {
  name:'MainTabbar',
  components:{
    'tab-bar-item':TabBarItem,
    'tab-bar':TabBar
  }
}
</script>

<style scoped>

</style>