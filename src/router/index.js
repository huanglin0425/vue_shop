import Vue from 'vue'
import VueRouter from 'vue-router'
import Login  from "../components/login.vue"
import Home  from "../components/Home.vue"
import Welcome from "../components/Welcome.vue"
import Users from "../components/user/Users.vue"




Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // 重定向
  { path: '/',redirect:'/login'},  
  { path:"/login",component:Login },
  { path:"/home",
    component:Home,
    redirect:"/welcome",
    children:[
         {path:"/welcome",component:Welcome},
         {path:"/users",component:Users}
         ] 
}
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //next() 放行  next("/login") 强制跳转
  if(to.path==="/login") return next();
  //获取token
  const tokenStr=window.sessionStorage.getItem("token");
  // 没有token就强制跳转
  if(!tokenStr) return next("/login")
  next()
})

export default router
