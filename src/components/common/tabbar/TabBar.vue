<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style>
  #tab-bar{
    box-sizing: border-box;
    padding-top: 1px;
    background: #f4f4f4;
    display: flex;
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -2px 5px rgba(100,100,100,0.1);
  }
</style>
