<template>
  <div class="bottom-bar">
    <div class='bottom-bar-left' @click="checkedChange">
        <img src="../../../assets/img/checked.svg" :class="{checkedAll:isCheckedAll}" alt="">
        <span>全选</span>
    </div>
    <div class="bottom-bar-middle">
      合计:￥{{totlePrice}}
    </div>
    <div class="bottom-bar-right">
      去结算({{isCheckedLength}})
    </div>
  </div>
</template>

<script>


  export default{
    name:'CartBottomBar',
    methods:{
      checkedChange(){
        if (this.isCheckedAll == true){
          this.$store.state.cartList.forEach(item => item.isChecked=false)
        }
        else{
          this.$store.state.cartList.map(item => item.isChecked=true)
        }
      }
    },
    computed:{
      totlePrice(){
        const totlePrice =
        this.$store.state.cartList
        .filter(item => item.isChecked)
        .reduce((pre,item) => pre + Number(item.price)*Number(item.count) , 0)

        return totlePrice.toFixed(2)
      },
      isCheckedAll(){
        if (this.$store.state.cartList.length == 0){
          return false
        }
        return this.$store.state.cartList.every(item => item.isChecked)
      },
      isCheckedLength(){
        return this.$store.state.cartList.filter(item => item.isChecked).length
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    display: flex;
    line-height: 40px;
    background: rgba(100,100,100,0.05);
    padding-left: 4px;
    color: #515151;
    font-size: 14px;
  }
  .bottom-bar-left{
    flex: 1;
  }
  .bottom-bar-middle{
    flex: 1.5;
  }
  .bottom-bar-left img{
    position: relative;
    bottom: 2px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: white;
    border: 2px solid #8a8a8a;
    border-radius: 50%;
    margin-right: 4px;
  }
  .bottom-bar-left .checkedAll{
    border-color: skyblue;
    background: skyblue;
  }
  .bottom-bar-right{
    flex: 1;
    text-align: center;
    background: skyblue;
  }
</style>
