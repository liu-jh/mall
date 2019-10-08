module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport':{
      viewportWidth:375,
      viewportHeight:667,
      //指定转换后的视窗单位
      viewportUnit:'vw',
      //转换的最小px
      minPixelValue:1,
      //转换为视窗单位保留的小数
      unitPrecision:5,
      //指定不转换为视窗单位的类
      selectorBlackList:['tab-control-fixed','wrapper','home-scroll','detail-scroll','cart-scroll','bottom-bar'],
      //指定不转换的文件(正则)
      exclude:[/TabBar/,/NavBar/,/TabControl/,/DetailBottom/,/BackTop/],
      //允许在媒体查询中转换px
      mediaQuery:false
    }
  }
}
