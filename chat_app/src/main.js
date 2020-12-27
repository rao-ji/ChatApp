import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/about'
import Home from './components/home'
import Container from './components/Container'
import blogs from './components/blogs'
import Create_Blog from './components/create_Blog'
import todo from './components/todo.vue'
Vue.use(VueRouter);
const routes=[
  {path:'/', component: Home},
  {path:'/about', component: About},
  {path:'/crud', component: Container},
  {path:'/blogs', component: blogs},
  {path:'/create', component: Create_Blog},
  {path:'/todo', component: todo}

]

const router= new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
