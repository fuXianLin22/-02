<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="wap-home-o" to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" to="/layout/find">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/layout/info"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/layout/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
