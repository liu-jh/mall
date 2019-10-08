<template>
    <nav-bar>
      <img slot="left" src="../../../assets/img/back.svg" alt="" @click="backClick">
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" class="title-item" @click="titleClick(index)" :class="{active:currentIndex == index}">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

  export default{
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评价','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    color: #707070;
  }
  .title-item{
    height: 44px;
    flex:1;
    font-size: 14px;
    box-sizing: border-box;
  }
  .active{
    color: skyblue;
    border-bottom: 2px solid skyblue;
  }
  img{
    width: 24px;
    height: 24px;
    margin-top: 10px;
  }
</style>
