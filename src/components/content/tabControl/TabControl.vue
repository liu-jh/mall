<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class='tab-control-item'>
      <span @click="itemClick(index)" :class="{active:index==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
		methods:{
			itemClick(index){
				this.currentIndex = index;
        //调用Home父组件的方法，将当前点击的标签传给Home
				this.$emit('tabClick',this.currentIndex)
			}
		}
  }
</script>

<style>
  .tab-control{
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    display: flex;
    background: #f4f4f4;
    color: #707070;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
  }
  .tab-control-item span{
    height: 44px;
    padding: 10px;
  }
  .active{
    color: skyblue;
    border-bottom: 2px solid skyblue;
  }
</style>
