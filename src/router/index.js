import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)


const components = {
  login:()=>import('@/views/login'),
  layout:()=>import('@/views/layout'),
  index:()=>import('@/views/index'),
  users:()=>import('@/views/users'),
  addusers:()=>import('@/views/addusers'),
  edituser:()=>import('@/views/edituser'),
  userDetail:()=>import('@/views/userDetail'),
  getallbooks:()=>import('@/bookComponent/getallbooks'),
  setPassword:()=>import('@/views/setPassword')
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component: components.login
    },
    {
      path:'/layout',
      name:'layout',
      component:components.layout,
      redirect:'/layout/index',
      meta:{
        title:'首页'
      },
      children:[
        {
          path:'index',
          name:'index',
          component:components.index
        },
        {
          path:'users',
          meta:{
            title:'用户管理'
          },
          component:components.users,
        },
        {
          path:'addusers',
          component:components.addusers
        },
        {
          path:'edituser',
          component:components.edituser
        },
        {
          path:'userDetail',
          meta:{
            title:'用户详情'
          },
          component:components.userDetail,
        },
        {
          path:'getallbooks',
          component:components.getallbooks
        },
        {
          path:'setPassword',
          component:components.setPassword
        }
      ]
    }
  ]
})
