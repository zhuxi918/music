import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import index from "@/components/index";
import player from "@/components/player";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Main,
      children:[
        {path:"",component:index},
        {path:"/player",component:player},
      ] 
    }
  ]
})
