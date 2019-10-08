<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullingUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        bscroll:null
      }
    },
    mounted(){
      //创建滚动对象,参数1为要控制的元素，参数2为配置对象
      this.bscroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad:this.pullingUpLoad,
        probeType:this.probeType,
        click:true
      })
      //监听滚动事件
      if (this.probeType == 2 || this.probeType == 3){
        this.bscroll.on('scroll' , positon => {
          this.$emit('scroll' , positon)
        })
      }
      //监听上拉事件
      if (this.pullingUpLoad == true){
        this.bscroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      //点击回到顶部
      scrollTo(x, y, time){
        this.bscroll.scrollTo(x, y, time)
      },
      //刷新滚动高度
      refresh(){
        this.bscroll.refresh()
      },
      //上拉加载数据已返回
      finishPullUp(){
        this.bscroll.finishPullUp()
      },
      //获取当前已滚动距离
      getY(){
        return this.bscroll.y
      }
    }
  }
</script>

<style>
</style>
