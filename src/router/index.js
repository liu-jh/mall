import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home.vue')
const Class = ()=>import('../views/class/Class.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Detail = ()=> import('../views/detail/Detail.vue')
/* import Home from '../views/home/Home.vue'
import Class from '../views/class/Class.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue' */

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/class',
    component:Class
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router=new VueRouter({
  routes:routes,
  mode:'history'
})

export default router
