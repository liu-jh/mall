<template>
  <div class="toast" v-show="isShowToast">
    {{message}}
  </div>
</template>

<script>
  export default{
    name:'Toast',
    data(){
      return {
        message:'',
        isShowToast:false,
        timerId:null
      }
    },
    methods:{
      showToast(message, delay){
        this.message = message
        this.isShowToast = true
        clearTimeout(this.timerId)

        this.timerId = setTimeout(() => {
          this.isShowToast = false
          this.message = ''
        },delay)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 999;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 8px 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
