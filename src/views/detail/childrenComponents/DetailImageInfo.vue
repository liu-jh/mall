<template>
  <div v-if="Object.keys(imageInfo).length != 0">
      <div class="desc">商品展示</div>
      <div class="image-info">
        <img v-for="item in imageInfo.detailImage[0].list" :src="item" alt="" @load="detailImgLoad">
      </div>
  </div>
</template>

<script>
  export default{
    name:'DetailGoodsInfo',
    props:{
      imageInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      detailImgLoad(){
        this.$emit('detailImgLoad')
      }
    }
  }
</script>

<style>
  .desc{
    font-size: 18px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 30%;
    line-height: 30px;
    background: skyblue;
    border-radius: 10px;
    text-align: center;
    color: white;
  }
  .image-info{
    padding: 0 4px;
  }
  .image-info img{
    width: 100%;
    margin-bottom: 2px;
  }
</style>
