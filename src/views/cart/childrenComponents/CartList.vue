<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartList" :goodsInfo='item'></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from './CartListItem.vue'

  export default{
    name:'CartList',
    components:{
      CartListItem
    },
    computed:{
      cartList(){
        return this.$store.state.cartList
      }
    }
  }
</script>

<style>
</style>
