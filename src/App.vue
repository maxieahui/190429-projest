<template>
  <div id="app">
   <router-view></router-view>
    <Guide v-show="$route.meta.Guide"></Guide>
  </div>
</template>

<script>
  import Guide from "./components/Guide/Guide.vue"
export default {
    components:{
      Guide
    },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }
</style>
