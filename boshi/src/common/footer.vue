<template>
  <footer>
    <ul>
      <li><router-link to="/aboutUs">关于我们</router-link></li>
      <li><router-link to="/address">联系我们</router-link></li>
      <li><router-link to="/feedback">意见反馈</router-link></li>
    </ul>
    <!-- <p>©2018 leboshi Telecom Equipment Co., Ltd. All rights reserved.</p> -->
    <p><a href="http://www.beian.miit.gov.cn">粤ICP备16091771号-5</a></p>
    <div :class="showBT?'showBackT':'hideBackT'" class="backToTop" @click="toTop(step)"><img src="../../static/img/icon_top_default.png"></div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      data:[],
      showBT:false,
    }
  },
  props:{
    step:{   //此数据是控制动画快慢的
      type:Number,
      default:50
    }
  },
  components:{
  },
  mounted:function(){
    window.addEventListener('scroll', this.handleScroll)
    //请求web的接口
    // this.$http.get(this.$api+"/web").then((res)=>{
    //   this.data = res.data.data;
    //   // console.log(this.data,78)
    // })

  },
  methods:{
    toTop(i){
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop-=i;
      if (document.documentElement.scrollTop>0) {
          var c=setTimeout(()=>this.toTop(i),16);
      }else {
          clearTimeout(c);
      }
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if( scrollTop == 0 ){
        this.showBT = false;
      }
      else if ( scrollTop >= 380 ){
        this.showBT = true;
      }
    },

  },
}
</script>

<style scoped lang="scss">
  @import "common.scss";
  .showBackT {
    opacity:0.4;
  }
  .hideBackT {
    opacity:0;
  }
  footer {
    width:100%;
    height:90px;
    position: fixed;
    // margin-top: -90px;
    background:#0c1e2c;
    box-sizing:border-box;
    font-size:12px;
    color:white;
    bottom: 0;
    padding-top:26px;
    .backToTop {
      text-align:center;
      background:rgba(12,29,43,1);
      border-radius:2px;
      cursor:pointer;
      position: fixed;
      bottom:92px;
      right:30px;
      height: 46px;
      transition: all 1s;
      img {
        padding:7px 13px;
      }
    }
    ul {
      text-align:center;
      margin-bottom:12px;
      li {
        @include ibMid();
        margin:0 35px;
      }
    }
    a {
      color:white;
    }
    p {
      text-align:center;
    }

  }
</style>
