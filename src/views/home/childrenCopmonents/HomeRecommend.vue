<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'HomeRecommend',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 8px solid rgba(100,100,100,0.1);
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 6px;
  }
  .recommend-item div{
    color: #707070;
  }
</style>
