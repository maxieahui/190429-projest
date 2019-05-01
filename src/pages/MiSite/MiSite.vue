<template>
  <div>
    <!--首页头部-->
    <Header title="昌平区北七家宏福科技园(337省道北)">
      <span class="header_search" slot="left">
        <i class="iconfont icon-search"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <section class="msite">
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/aodi.jpg" alt="">
                </div>
                <span>奥迪</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/benchi.jpg">
                </div>
                <span>奔驰</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/BMM.jpg" >
                </div>
                <span>宝马</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/dazhong.jpg">
                </div>
                <span>大众</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/fengtian.jpg">
                </div>
                <span>丰田</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/fute.jpg">
                </div>
                <span>福特</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/honda.jpg">
                </div>
                <span>Honda</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images1/nissan.jpg">
                </div>
                <span>Nissan</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xihuan"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <Shoplist></Shoplist>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '../../common/Header/header.vue'
  import Shoplist from '../../common/Shoplist/shoplist.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted () {
      new Swiper('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    created(){
    },
    methods:{
      /*getlist(){
        this.$ajax.get("Misite.json").then(result=>{
          console.log(result)
        }).catch()
      }*/
    },
    components: {
      Header,
      Shoplist
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/stylus.styl"
  .msite //首页
    width 100%
    margin-top 60px
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 100px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
