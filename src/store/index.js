import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    //原商品数量加1
    addCounter(state, payload){
      payload.count += 1
    },
    //添加新商品,初始化数量为1,默认为选中状态
    addGoods(state, payload){
      payload.count = 1
      payload.isChecked = true
      state.cartList.push(payload)
    }
  },
  actions:{
    addToCart(context, payload){
      return new Promise((resolve, reject) => {
        //判断商品是否已经添加过
        for (let i = 0; i < context.state.cartList.length; i++){
          if (context.state.cartList[i].iid == payload.iid){
            //商品已添加过则调用addCounter
            context.commit('addCounter', context.state.cartList[i])
            return resolve()
          }
        }
        //商品没添加过则调用addGoods
        context.commit('addGoods', payload)
        resolve()
      })
    }
  },
  getters:{
    //计算购物车长度
    cartLength(state, getters){
      return state.cartList.length
    }
  }
})

export default store
