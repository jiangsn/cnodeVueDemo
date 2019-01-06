import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import postlist from '../components/postlist'
import ArticleDetail from '../components/ArticleDetail'
import UserInfo from '../components/UserInfo'
import TopicsCollect from '../components/TopicsCollect'
import SideBar from '../components/SideBar'
import Login from '../components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components: {
        main: postlist,
      }
    },
      
    {
      name:'post_content',
      path:'/topic/:id/:name',
      components: {
      
        main: ArticleDetail,
        SideBar:SideBar,
      }
    },
    {
      name:'userinfo',
      path:'/userinfo/:name',
      components: {
        main: UserInfo,
      }
    },
    {
      name:'topicsCollect',
      path:'/TopicsCollect/:name',
      components: {
        main: TopicsCollect,
      }
    },
    {
      name:'login',
      path:'/login/',
      components: {
        main: Login,
      }
    },
   
  ]
})
