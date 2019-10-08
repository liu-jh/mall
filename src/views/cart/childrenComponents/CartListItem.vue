<template>
  <div class="cart-list-item">
    <div class="checked-botton" @click="checkedClick" :class="{checked:isChecked}">
      <img src="../../../assets/img/checked.svg" alt="">
    </div>
    <div class='goods-image'>
      <img :src="goodsInfo.image" alt="">
    </div>
    <div class='goods-info' @click="itemClick">
      <p class="goods-title">{{goodsInfo.title}}</p>
      <p class="goods-desc">{{goodsInfo.desc}}</p>
      <div class='goods-info-bottom'>
        <div class="goods-price">￥{{goodsInfo.price}}</div>
        <div class="goods-count">x{{goodsInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'CartListItem',
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkedClick(){
        this.goodsInfo.isChecked = !this.goodsInfo.isChecked
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsInfo.iid)
      }
    },
    computed:{
      isChecked(){
        return this.goodsInfo.isChecked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    display: flex;
    padding: 4px;
    border-bottom: 1px #bfbfbf solid;
  }
  .checked-botton{
    width: 20px;
    height: 20px;
    border: 2px solid #8a8a8a;
    margin: auto;
    border-radius: 50%;
    margin-right: 4px;
  }
  .checked{
    border-color: skyblue;
    background: skyblue;
  }
  .checked-botton img{
    width: 20px;
    height: 20px;
  }
  .goods-image{
    width: 20%;
  }
  .goods-image img{
    width: 100%;
  }
  .goods-info{
    flex: 1;
    padding-left: 6px;
    padding-right: 6px;
  }
  .goods-title,
  .goods-desc
  {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
  }
  .goods-desc{
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .goods-info-bottom{
    display: flex;
    font-size: 14px;
  }
  .goods-price{
    flex: 1;
    text-align: left;
    color: skyblue;
  }
  .goods-count{
    flex: 1;
    text-align: right;
  }


</style>
