<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length != 0">
		<div class="title">
      {{baseInfo.title}}
    </div>
    <div class="price-info">
      <span class="new-price">¥{{baseInfo.newPrice}}</span>
      <span class="old-price"><del>{{baseInfo.oldPrice}}</del></span>
      <span class="discount">{{baseInfo.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[0].name}}</span>
    </div>
    <div class="services-info">
      <!-- <div class="services-item" v-for="index in baseInfo.services.length-1">
        <img :src="baseInfo.services[index].icon" alt="">
        <span>{{baseInfo.services[index].name}}</span>
      </div> -->
      <span v-for="index in baseInfo.services.length-1" class="services-item">
        <img :src="baseInfo.services[index].icon" alt="">
        <span>{{baseInfo.services[index].name}}</span>
      </span>
    </div>
	</div>
</template>

<script>
export default {
	name:'DetailBaseInfo',
	props:{
		baseInfo:{
			type:Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style scoped>
  /* 基本信息 */
  .base-info{
    width: 100vw;
    color: #707070;
  }
  .title{
    font-size: 14px;
    padding:10px 6px;
    color: #515151;
  }
  .price-info{
    margin-bottom: 18px;
  }
  .price-info span{
    margin-left: 6px;
  }
  .new-price{
    color: skyblue;
    font-size: 16px;
  }
  .old-price{
    font-size: 10px;
  }
  .discount{
    background: skyblue;
    border-radius: 6px;
    padding: 0 4px;
    font-size: 12px;
    color: white;
  }
  /* 其他信息 */
  .other-info{
    width: 100vw;
    display: flex;
    /* border-bottom: 1px solid #e6e6e6; */
    height: 18px;
  }
  .other-info span{
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: #8a8a8a;
  }
  .other-info span:first-child{
    text-align: left;
    padding-left: 6px;
  }
  .other-info span:last-child{
    text-align: right;
    padding-right: 6px;
  }
  /* 售后服务信息 */
    .services-info{
      width: 100vw;
      font-size: 10px;
      height: 30px;
      line-height: 30px;
      border-bottom: 2px solid #e6e6e6;
    }
    .services-info img{
      width: 10px;
      height: 10px;
    }
    .services-item{
      text-align: left;
      overflow: hidden;
			text-overflow: ellipsis;
      margin-right: 6px;
    }
    .services-item:first-child{
      padding-left: 6px;
      text-align: left;
    }
    .services-item:last-child{
      padding-right: 6px;
      text-align: right;
    }
</style>
