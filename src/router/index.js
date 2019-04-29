import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../pages/MiSite/MiSite.vue"
import Order from "../pages/Order/Order.vue"
import person from "../pages/person/person.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/login/Login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',  register: '/Msite'},
    {path:'/Msite',component:Msite,meta:{
        Guide:true
      }},
    {path:'/Order',component:Order,meta:{
        Guide:true
      }},
    {path:'/person',component:person,
      meta:{
        Guide:true
      }},
    {path:'/Search',component:Search,
      meta:{
        Guide:true
      }},
    {path:'/Login',component:Login},
  ]
})
