<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name='item-icon-active'></slot></div>
    <div v-else><slot name='item-icon'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'skyblue'
      }
    },
    computed:{
      isActive:function(){
        return this.$route.path == this.path
      },
      activeStyle:function(){
        return this.isActive ? {color:this.activeColor} : {color:'#515151'}
      }
    },
    methods:{
      itemClick:function(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
      flex: 1;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
    }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
