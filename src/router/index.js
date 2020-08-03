import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to,from,next)=>{
//   let token = sessionStorage.getItem('token');
//   console.log(to)
//   if(to.name === 'Login'){
//       if(token){
//         next('/')
//       }else{
//         next()
//       }
//   }else{
//     if(token){
//       next()
//     }else{
//       next('/login')
//     }
//   }
// })

export default router
