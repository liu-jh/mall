<template>
  <div v-if="Object.keys(paramsInfo).length != 0" class="params-info">
    <div class="rule-params">
      <div class="params-desc">{{paramsInfo.rule.key}}</div>
      <div class="params-item" v-for="item in paramsInfo.rule.tables[0]">
        <span v-for="index in item.length">{{item[index-1]}}</span>
      </div>
    </div>
    <div class="product-params">
      <div class="params-desc">{{paramsInfo.info.key}}</div>
      <div class="product-item" v-for="item in paramsInfo.info.set">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"DetailParamsInfo",
    props:{
      paramsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .params-info{
    font-size: 12px;
    margin-top: 40px;
  }
  .params-desc{
    font-size: 18px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 30%;
    line-height: 30px;
    background: skyblue;
    border-radius: 10px;
    text-align: center;
    color: white;
  }
  .params-item{
    line-height: 20px;
    border-bottom: 1px solid #bfbfbf;
    display: flex;
    padding-left: 6px;
    margin-bottom: 6px;
  }
  .params-item span{
    flex: 1;
  }
  .product-item{
    padding-left: 6px;
    line-height: 20px;
    margin-bottom: 14px;
    border-bottom: 1px solid #bfbfbf;
  }
  .product-item span:last-child{
    color: skyblue;
    margin-left: 14px;
  }
</style>
