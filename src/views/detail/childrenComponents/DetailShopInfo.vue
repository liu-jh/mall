<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length != 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div>
          <div>{{shopInfo.sells | sellsFilter}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div>{{shopInfo.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="score shop-middle-right">
        <div v-for="item in shopInfo.score" class="score-item">
          <span>{{item.name}}</span>
          <span :style="{color: item.isBetter ? 'red':'seagreen'}">{{item.score}}</span>
          <span :style="{background : item.isBetter ? 'red':'seagreen'}">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div>进入店铺</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailShopInfo',
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellsFilter(data){
        let sells = Number(data)
        if(sells > 10000){
          let wan = parseInt(sells/10000)
          let qian = parseInt(sells%10000/1000)
          return `${wan}.${qian}万`
        }
        return sells
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    width: 100vw;
    color: #515151;
  }
  /* 顶部信息 */
  .shop-top{
    margin-top: 14px;
    margin-left: 6px;
  }
  .shop-top img{
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
  .shop-top span{
    margin-left: 10px;
  }
  /* 中间信息 */
  .shop-middle{
    display: flex;
  }
  .shop-middle .shop-middle-left,
  .shop-middle .shop-middle-right
  {
    flex: 1;
  }
  .shop-middle-left{
    padding-top: 18px;
    display: flex;
    font-size: 12px;
    box-sizing: border-box;
  }
  .shop-middle-left>div{
    flex: 1;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .shop-middle-left>div:last-child div{
    border-right: 1px solid #e6e6e6;
  }
  .shop-middle-right{
    text-align: left;
    font-size: 12px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 8px;
    box-sizing: border-box;
  }
  .score-item{
    display: flex;
    margin: 4px 0;
  }
  .score-item span{
    flex: 1;
    text-align: center;
    line-height: 20px;
  }
  .shop-middle-right span:nth-child(3){
    color: white;
    border-radius: 8px;
  }
  /* 底部信息 */
  .shop-bottom{
    border-bottom: 2px solid #e6e6e6;
  }
  .shop-bottom div{
    width: 30%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 10px auto;
    background: #cdcdcd;
    border-radius: 8px;
    font-size: 18px;
  }
</style>
