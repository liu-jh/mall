<template>
  <div v-if="Object.keys(commentInfo).length != 0 && commentInfo.cRate != 0" class="detail-comment">
    <div class="info-header">
      <div>用户评价({{commentInfo.cRate}})</div>
      <div class="more">查看更多</div>
    </div>
    <div class="user-info">
      <img :src="commentInfo.list[0].user.avatar" alt="">
      <span>{{commentInfo.list[0].user.uname}}</span>
    </div>
    <div class="content-info">
      <p>{{commentInfo.list[0].content}}</p>
    </div>
    <div class="other-info">
      <span>{{commentInfo.list[0].created | dataFilter}}</span>
      <span>{{commentInfo.list[0].style}}</span>
    </div>
    <div v-if="commentInfo.list[0].images" class="comment-image">
      <img :src="item" alt="" v-for="item in commentInfo.list[0].images">
    </div>
  </div>

  <div v-else class='none-comment'>
    暂无评价
  </div>
</template>

<script>
  export default{
    name:'DetailCommentInfo',
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      dataFilter(data){
        let date = new Date(Number(data)*1000)
        let year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDay()
        let hour = String(date.getHours()).padStart(2,'0')
        let minute = String(date.getMinutes()).padStart(2,'0')
        let second = String(date.getSeconds()).padStart(2,'0')
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
      }
    }
  }
</script>

<style scoped>
  .detail-comment{
    margin-bottom: 30px;
    border-bottom: 2px solid #bfbfbf;
  }
  .info-header{
    margin-top: 20px;
    padding-left: 6px;
    padding-right: 8px;
    display: flex;
    border-bottom: 2px solid #bfbfbf;
    font-size: 18px;
  }
  .info-header div{
    flex: 1;
    margin-bottom: 14px;
    margin-top: 20px;
  }
  .info-header .more{
    text-align: right;
  }
  .user-info{
    padding-left: 6px;
    margin-top: 10px;
  }
  .user-info img{
    width: 30px;
    height: 30px;
    margin-right: 6px;
    vertical-align: middle;
  }
  .content-info{
    font-size: 14px;
    padding-left: 6px;
    padding-right: 6px;
    color: #515151;
  }
  .other-info{
    font-size: 12px;
    color: #8a8a8a;
    padding-left: 6px;
    padding-right: 6px;
    margin-bottom: 8px;
  }
  .other-info span:first-child{
    margin-right: 6px;
  }
  .comment-image{
    padding-left: 6px;
  }
  .comment-image img{
    width: 60px;
    height: 60px;
    margin-right: 2px;
  }
  .none-comment{
    padding-left: 6px;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #bfbfbf;
  }
</style>
