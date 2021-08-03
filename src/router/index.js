import Vue from 'vue'
import Router from 'vue-router'

import index from "@/view/index.vue";
import login from "@/view/login.vue";
import thumbsUp from "@/view/thumbs-up.vue";
import hall from "@/view/hall.vue";
import agenda from "@/view/agenda.vue";//
import posterDetail from "@/view/posterDetail.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'首页',
        redirect:'/index',
        menuShow:false
    },
    {
        path:'/index',
        name:'首页',
        component: index,
        menuShow:false
    },
    {
        path:'/login',
        name:'登录',
        component: login,
        menuShow:false
    },
    {
        path:'/thumbsUp',
        name:'点赞',
        component: thumbsUp,
        menuShow:false
    },
    {
        path:'/hall',
        name:'会场',
        component: hall,
        menuShow:false
    },
    {
        path:'/agenda',
        name:'议程',
        component: agenda,
        menuShow:false
    },
    {
        path:'/posterDetail',
        name:'海报详情',
        component: posterDetail,
        menuShow:false
    },
    {
        path: "*",
        redirect: "/index"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})