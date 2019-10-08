<template>
  <div class="back-top">
    <img src="../../../assets/img/top.png" alt="">
  </div>
</template>

<script>
  export default{
    name:'BackTop'
  }
</script>

<style>
  .back-top{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 10px;
    bottom: 80px;
    border-radius: 50%;
  }
  .back-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.9;
  }
</style>
