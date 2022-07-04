<template>
  <div class="home">
    <div class="search" @click="toCitys">
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
      <van-icon name="location-o" size="25px" />
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
    <!-- 导图 -->
    <van-grid :border="false">
      <van-grid-item text="整租">
        <template #icon>
          <van-icon name="wap-home-o" class="grid" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <van-icon name="friends-o" class="grid" />
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房">
        <template #icon>
          <van-icon name="location-o" class="grid" />
        </template>
      </van-grid-item>
      <van-grid-item text="去出租">
        <template #icon>
          <van-icon name="home-o" class="grid" />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="zufang">
      <van-cell title="租房小组" value="更多" title-class="zufang_title" />
      <!-- 信息列表 -->
      <div class="zufang_main">
        <van-card
          :title="item.title"
          :desc="item.desc"
          :thumb="'http://liufusong.top:8080' + item.imgSrc"
          v-for="item in houseList"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getBanners, getHouse } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      bannerList: [],
      houseList: []
    }
  },
  created() {
    this.getBanners()
    this.getHouse()
  },
  methods: {
    async getBanners() {
      const { data } = await getBanners()
      // console.log(data.body)
      this.bannerList = data.body
    },
    async getHouse() {
      const { data } = await getHouse()
      // console.log(data.body)
      this.houseList = data.body
    },
    toCitys() {
      this.$router.push({
        path: '/city'
      })
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
  top: 25px;
  right: 15px;
  z-index: 10;
}
.grid {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #0ab06b;
  background-color: #f2fbf7;
}
.zufang {
  width: 100%;
  height: 188px;
  background-color: #f6f5f6;
  .van-cell {
    background-color: #f6f5f6;
    .zufang_title {
      font-weight: 700;
    }
  }
  .zufang_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .van-card {
      // margin: 5px 5px;
      height: 60px;
      .van-card__thumb {
        width: 50px;
        margin-right: 18px;
        .van-image {
          padding-top: 0px;
          width: 50px !important;
          height: 50px !important;
        }
      }
      &:nth-child(1) {
        margin-top: 8px;
      }
    }
  }
}

.homeImg {
  width: 100%;
  height: 212px;
}
</style>
