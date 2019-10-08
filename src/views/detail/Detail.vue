<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick='titleClick' ref='navbar'></detail-nav-bar>

    <scroll class="detail-scroll" ref='scroll' :probe-type='3' @scroll='scroll'>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :base-info='baseInfo'></detail-base-info>
      <detail-shop-info :shop-info='shopInfo'></detail-shop-info>
      <detail-image-info :image-info='imageInfo' @detailImgLoad='detailImgLoad'></detail-image-info>
      <detail-params-info :params-info='paramsInfo' ref='params'></detail-params-info>
      <detail-comment-info :comment-info='commentInfo' ref='comment'></detail-comment-info>
      <good-list :goods='recommendInfo' ref='recommend'></good-list>
    </scroll>

    <back-top v-show="isShowBackTop" @click.native='backTop'></back-top>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childrenComponents/DetailNavBar.vue'
  import DetailSwiper from './childrenComponents/DetailSwiper.vue'
  import DetailBaseInfo from './childrenComponents/DetailBaseInfo.vue'
  import DetailShopInfo from './childrenComponents/DetailShopInfo.vue'
  import DetailImageInfo from './childrenComponents/DetailImageInfo.vue'
  import DetailParamsInfo from './childrenComponents/DetailParamsInfo.vue'
  import DetailCommentInfo from './childrenComponents/DetailCommentInfo.vue'
  import DetailBottomBar from './childrenComponents/DetailBottomBar.vue'

  import GoodList from '../../components/content/goods/GoodsList.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'

  import {getDetail, BaseInfo, ShopInfo, getRecommend} from '../../network/detail.js'
  import {debounce} from '../../assets/js/debounce.js'

  export default{
    name:'Detail',
    data(){
      return {
        iid:null,
        topImages:[],
        baseInfo:{},
        shopInfo:{},
        imageInfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommendInfo:[],
        goodsImgListener:null,
        getTabOffsetTop:null,
        tabOffsetTop:[],
        currentIndex:0,
        isShowBackTop:false,
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailParamsInfo,
      DetailCommentInfo,
			GoodList,
      DetailBottomBar,
      Scroll,
      BackTop
    },
    created(){
      //保存商品id
      this.iid = this.$route.params.iid
      //请求商品详情数据
      getDetail(this.iid).then(res => {
        const data = res.result

        this.topImages = res.result.itemInfo.topImages
        this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.imageInfo = data.detailInfo
        this.paramsInfo = data.itemParams
        this.commentInfo = data.rate
      })
      getRecommend().then(res => {
        this.recommendInfo = res.data.list
      })
    },
    methods:{
      //刷新滚动高度和navbar对应标签的高度
      detailImgLoad(){
        this.goodsImgListener()
        this.getTabOffsetTop()
      },
      scroll(position){
        for(let i=0; i < this.tabOffsetTop.length-1; i++){
          if(this.currentIndex != i && (-position.y >= this.tabOffsetTop[i] && -position.y < this.tabOffsetTop[i+1])){
            this.$refs.navbar.currentIndex = i;
            this.currentIndex = i;
            break;
          }
        }
        this.isShowBackTop = (-position.y > 800)
      },
      //点击navbar对应的标签跳到相应位置
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.tabOffsetTop[index], 200)
        this.currentIndex = index
      },
			//点击加入购物车
      addToCart(){
        const product = {}
        product.iid = this.iid
        product.image = this.topImages[0]
        product.title = this.baseInfo.title
        product.desc = this.baseInfo.desc
        product.price = this.baseInfo.newPrice

        this.$store.dispatch('addToCart', product).then(res=> {
          this.$toast.showToast('添加成功' , 1500)
        })
      },
      //点击回到顶部
      backTop(){
        this.$refs.scroll.scrollTo(0, 0, 200)
      }
    },
    mounted(){
      //监听图片加载
      const newrefresh = debounce(this.$refs.scroll.refresh, 50)
      this.goodsImgListener = () =>{
        newrefresh()
      }
      this.$bus.$on('goodsImgLoad', this.goodsImgListener)

      //获取navbar对应标签的高度
      this.getTabOffsetTop = debounce(() => {
        this.tabOffsetTop = []

        this.tabOffsetTop.push(0)
        this.tabOffsetTop.push(this.$refs.params.$el.offsetTop - 60)
        this.tabOffsetTop.push(this.$refs.comment.$el.offsetTop - 60)
        this.tabOffsetTop.push(this.$refs.recommend.$el.offsetTop - 60)
        this.tabOffsetTop.push(Number.MAX_VALUE)
      },100)
    },
    destroyed(){
      //取消图片加载监听
      this.$bus.$off('goodsImgLoad', this.goodsImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 1;
    background: white;
  }
  .nav-bar{
    position: relative;
    background: white;
    z-index: 1;
  }
  .detail-scroll{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
