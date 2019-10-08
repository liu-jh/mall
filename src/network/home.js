import {request} from './request.js'

//请求轮播图和推荐数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    method:'get'
  })
}

//请求商品列表数据，参数1：商品类型，参数2：页码
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    data:'get',
    params:{
      type,
      page
    }
  })
}