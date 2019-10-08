<template>
  <div class="goods-item" @click="itemClick(goodsItem.iid)">
    <img :src='goodsImage' alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      goodsImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
		methods:{
      //图片加载完成时发射事件
			imgLoad(){
          this.$bus.$emit('goodsImgLoad')
			},
      itemClick(iid){
        if(this.$route.path == '/home'){
          this.$router.push('/detail/' + iid)
        }
      }
		}
  }
</script>

<style>
  .goods-item{
    width:50%;
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 5px;
  }
  .goods-item img{
    width: 100%;
    height: 260px;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px 2px rgba(135,206,235,0.2);
  }
  .goods-info{
    text-align: center;
    font-size: 12px;
    color: #707070;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 2px;
    margin-top: 4px;
  }
  .goods-info .price{
    color: skyblue;
    margin-right: 4px;
  }
  .goods-info .price::before{
    content: '￥';
  }
  .goods-info .collect::before{
    content: "❤";
    margin-left: 4px;
  }
</style>
