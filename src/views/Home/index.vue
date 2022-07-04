<template>
  <div class="home">
    <div class="search">
      <div class="address">
        <span>北京</span>
      </div>
      <i>|</i>
      <!-- 搜索框 -->
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        background="#f7f8fa"
        class="search_input"
      />
    </div>
    <span class="icon">
      <van-icon name="location-o" />
    </span>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#888888">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <van-image
          :src="'http://liufusong.top:8080' + item.imgSrc"
          class="homeImg"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanners } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      bannerList: []
    }
  },
  created() {
    this.getBanners()
  },
  methods: {
    async getBanners() {
      const { data } = await getBanners()
      console.log(data.body)
      this.bannerList = data.body
    }
  }
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 212px;
  text-align: center;
  background-color: #39a9ed;
}
.search {
  display: flex;
  position: absolute;
  top: 20px;
  left: 12px;
  z-index: 1;
  width: 310px;
  height: 34px;
  background-color: #f7f8fa;
  padding-left: 10px;
  .address {
    width: 50px;
    height: 34px;
    padding: 5px;
    line-height: 20px;
    // border-right: 1px solid #eee;
    // background-color: pink;
    span {
      text-align: center;
      font-size: 14px;
      color: #333;
    }
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      left: 47px;
      border: 4px solid transparent;
      border-top: 4px solid #7f7f80;
    }
  }
  i {
    font-size: 18px;
    height: 34px;
    padding-top: 6px;
    color: #e8e8e8;
  }
  .search_input {
    flex: 1;
    &::placeholder {
      color: #e2e3e3;
    }
  }
}
.icon {
  position: absolute;
  top: 22px;
  right: 10px;
  z-index: 10;
}
.homeImg {
  width: 100%;
  height: 212px;
}
</style>
