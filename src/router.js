import VueRouter from 'vue-router'

// 自定義組件引入開始
import App from './App'
import Login from './components/account/login.vue'
import Index from './components/page/index.vue'
import List from './components/page/list.vue'
import Classify from './components/page/classify.vue'
import My from './components/page/my.vue'

const router = new VueRouter({
  mode: 'history',
  saveScrollPosition: true,/* 保存滚动位置 */
  transitionOnLoad: true,
  linkActiveClass: 'v-link-active',
  root: '/',/* 配置路由默认 活跃 类名*/
  routes:[
    {
      path: '/',
      component: App,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'classify',
          component: Classify
        },
        {
          path: 'my',
          component: My,
          children: [
            {
              path: 'login',
              component: Login
            }
          ]
        },
      ]
    },
    {
      path:'/login',
      component: Login
    },
    {
      path: '/',//重定向到index
      redirect: '/index'
    }
  ]
});
export default router;
