<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="left-item">
        <img src="../../../assets/img/bottombar/service.svg" alt="">
        <div class="item-text">客服</div>
      </div>
      <div class="left-item">
        <img src="../../../assets/img/bottombar/store.svg" alt="">
        <div class="item-text">店铺</div>
      </div>
      <div class="left-item">
        <img src="../../../assets/img/bottombar/collect.svg" alt="">
        <div class="item-text">收藏</div>
      </div>
    </div>
    <div class="right">
      <div class="right-item" @click="addToCart">加入购物车</div>
      <div class="right-item">购买</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailBottomBar',
    methods:{
      addToCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    color: #515151;
    background: #f4f4f4;
    position: relative;
    height: 49px;
    font-size: 14px;
    box-shadow: 0px -2px 5px rgba(100,100,100,0.1);
  }
  .bottom-bar>div{
    flex: 1;
  }
  .left{
    display: flex;
  }
  .left .left-item{
    flex: 1;
  }
  .left-item img{
    width: 24px;
    height: 24px;
  }
  .right{
    display: flex;
  }
  .right-item{
    flex: 1;
    line-height: 49px;
    text-align: center;
  }
  .right-item:first-child{
    background: #f4ea2a;
  }
  .right-item:last-child{
    background: skyblue;
    color: white;
  }
</style>
