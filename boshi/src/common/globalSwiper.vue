<template>
  <div class="swiper-container homeBaner" id="swiper_container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(ads,index) in ads" :key="index">
        <img :src="ads.image==null?defaultImg:http+ads.image" @click="goUrl(ads.url)">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import common from './common';
  import {mapState} from 'vuex';
  import {mixin} from '@/common/mixin.js';

  export default {
    mixins: [mixin],
    data() {
      return {
        http: '', //图片前缀
        ads: [],
        type: 0,
      }
    },
    components: {},
    computed: {
      count() {
        return this.$store.state.bannerLbs
      }
    },
    mounted: function () {
      console.log(this.mixindata,'共享');
      this.log()
      const that = this;
      that.defaultImg = common.defaultImg;
      that.http = this.$httpImg;
      if (that.count.length === 0) {
        that.getBanner();
      } else {
        that.ads = that.bannerLbs;
        new Swiper('.homeBaner', {
          pagination: '.swiper-pagination',
          autoplay: 4000,
          paginationClickable: true,
          centeredSlides: true,
          preventClicks: false,
          speed: 1000,
          observer: true,
          // loop: true,
          dynamicMainBullets: 2,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
        })
      }


    },
    methods: {
      //跳转外链
      goUrl(url){
        if (url){
          window.open(url);
        }
      },
      getBanner() {
        const that = this;
        //请求首页接口
        this.$http.get(this.$api + "/adv/adv/list").then((res) => {
          console.log('%c 轮播图', 'color:green', res)
          let list = res.data.data;
          this.ads = list;
          let swiper = new Swiper('.homeBaner', {
            pagination: '.swiper-pagination',
            autoplay: 2000,
            paginationClickable: true,
            centeredSlides: true,
            preventClicks: false,
            speed: 600,
            observer: true,
            // loop: true,
            dynamicMainBullets: 2,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
          });
          let comtainer = document.getElementById('swiper_container');
          comtainer.onmouseenter = function () {
            swiper.stopAutoplay();
          };
          comtainer.onmouseleave = function () {
            swiper.startAutoplay();
          };
          that.$store.dispatch('bannerLbs', list);
          console.log(that.$store.state.bannerLbs,'bannerLbsbannerLbs');
          
        })
      },
    },
  }
</script>

<style scoped lang="scss">
 

  .swiper-container {
    width: 100%;
    min-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .swiper-slide {
    position: relative;
    background-size: 100% 100%;
    background-color: #eee;
    img{
      position: absolute;
      max-width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 100%;
    }
  }

  .swiper-slide a {
    display: block;
    height: 100%;
  }



  .homeBaner {
    background: white;
    margin-top: 62px;
  }

  .homeBaner .swiper-slide {
    height: 380px;
    img {
      max-width: 100%;
    }
  }
</style>
