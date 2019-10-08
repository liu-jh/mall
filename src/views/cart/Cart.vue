<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot='center'>购物车({{cartLength}})</div>
    </nav-bar>

    <scroll class="cart-scroll" ref='scroll'>
      <cart-list></cart-list>
    </scroll>

    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import CartList from './childrenComponents/CartList.vue'
  import CartBottomBar from './childrenComponents/CartBottomBar.vue'

  import Scroll from '../../components/common/scroll/Scroll.vue'

  export default{
    name:'Cart',
    components:{
      NavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    computed:{
      cartLength(){
        return this.$store.getters.cartLength
      }
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .cart-nav{
    background: skyblue;
    color: white;
    position: relative;
    z-index: 1;
  }
  .cart-scroll{
    height: calc(100% - 44px - 49px - 43px);
    overflow: hidden;
  }
</style>
