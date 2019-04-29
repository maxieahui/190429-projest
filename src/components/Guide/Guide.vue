<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: '/Msite'===$route.path}" @click.prevent="goto('/Msite')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/Search'===$route.path}" @click.prevent="goto('/Search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/Order'===$route.path}" @click.prevent="goto('/Order')">
      <span class="item_icon">
        <i class="iconfont icon-detail-fill"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/person'===$route.path}" @click.prevent="goto('/person')">
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: 'Guide',
    data(){
      return{}
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  .footer_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
  }

  .footer_guide::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }

  .footer_guide .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
  }

  .footer_guide .guide_item.on {
    color: #02a774;
  }

  .footer_guide .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .footer_guide .guide_item span .iconfont {
    font-size: 22px;
  }
</style>
