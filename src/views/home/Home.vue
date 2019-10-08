<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>

    <tab-control :titles="titles" @tabClick='tabClick' ref='tabControlFixed' class='tab-control-fixed' v-show='isTabFixed'></tab-control>

    <scroll class='home-scroll' ref='scroll' :probe-type='2' :pulling-up-load='true' @scroll='scroll' @pullingUp='pullingUp'>
      <home-swiper :banners='banners' @swiperImgLoad='swiperImgLoad'></home-swiper>
      <home-recommend :recommends='recommends'></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @tabClick='tabClick' ref='tabControl'></tab-control>
      <goods-list :goods='goods[currentType].list'></goods-list>
    </scroll>

    <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
  </div>
</template>

<script>
  //子组件
  import HomeSwiper from './childrenCopmonents/HomeSwiper.vue'
  import HomeRecommend from './childrenCopmonents/HomeRecommend.vue'
  import HomeFeature from './childrenCopmonents/HomeFeature.vue'
  //公共组件
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import TabControl from '../../components/content/tabControl/TabControl.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'
  //网络请求
  import {getHomeMultidata , getHomeGoods} from '../../network/home.js'
  //防抖函数
  import {debounce} from '../../assets/js/debounce.js'

	export default{
		name:'Home',
    data(){
      return {
        //轮播图数据
        banners:[],
        //推荐数据
        recommends:[],
        //导航栏数据
        titles:['流行','新款','精选'],
        //商品列表数据
        goods:{
          pop:{page:0, list:[]},
          new:{page:0, list:[]},
          sell:{page:0, list:[]}
        },
        //当前商品列表显示的类型
        currentType:'pop',
        //显示回到顶部图标
        isShowBackTop:false,
        //tabControl距离可视区域顶部的值
        tabControlOffsetTop:0,
        //tabControl是否吸顶
        isTabFixed:false,
        //离开首页时保留已滚动距离
        saveY:0,
        //商品图片加载完成后执行的回调函数
        goodsImgListener:null
      }
    },
		components:{
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
		},
    created(){
      //请求轮播图和推荐数据
      this.getHomeMultidata()
      //请求商品列表数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 网络请求
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          //将获取到的最新数据添加到对应数组，同时页码+1
          this.goods[type].list = this.goods[type].list.concat(res.data.list)
          this.goods[type].page += 1
          //完成上拉加载更多数据
          setTimeout(() => {
            this.$refs.scroll.finishPullUp()
          }, 100)
        })
      },
      /**
       * 事件监听
       */
      //TabControl子组件发生点击时调用的方法
      tabClick(currentIndex){
        switch (currentIndex){
          case 0 : this.currentType = 'pop' ; break;
          case 1 : this.currentType = 'new' ; break;
          case 2 : this.currentType = 'sell' ; break;
        }

        this.$refs.tabControlFixed.currentIndex = currentIndex
        this.$refs.tabControl.currentIndex = currentIndex
      },
      //点击回到顶部
      backClick(){
        this.$refs.scroll.scrollTo(0,0,300)
      },
      //监听页面滚动
      scroll(position){
       //显示和隐藏回到顶部图标
       this.isShowBackTop = position.y < -800
       //是否使tabControl吸顶
       this.isTabFixed = position.y < -(this.tabControlOffsetTop)
      },
      //上拉加载更多
      pullingUp(){
        this.getHomeGoods(this.currentType)
      },
      //监听轮播图数据是否加载完成,加载完后获取tabControl到可视页面的顶部距离
      swiperImgLoad(){
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop - 44
      }
    },
    activated(){
      //进入首页时立即回到保存的滚动距离
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      //监听商品列表图片是否加载完成,使用防抖函数刷新滚动高度
      const newrefresh = debounce(this.$refs.scroll.refresh , 50)
      this.goodsImgListener = () => {
        newrefresh()
      }
      this.$bus.$on('goodsImgLoad', this.goodsImgListener)
    },
    deactivated(){
      //离开首页时保留已滚动距离
      this.saveY = this.$refs.scroll.getY()
      //取消商品图片加载监听
      this.$bus.$off('goodsImgLoad', this.goodsImgListener)
    }
	}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    /* padding-bottom: 50px; */
    height: 100vh;
    width: 100vw;
  }
  .home-nav{
    background: skyblue;
    color: white;
    width: 100vw;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1; */
  }
  .tab-control-fixed{
    position: fixed;
    top: 44px;
    width: 100%;
    z-index: 2;
  }
  .home-scroll{
    /* position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden; */
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
