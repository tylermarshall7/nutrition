import Vue from 'vue'
import VueRouter from 'vue-router'
import FoodList from '../pages/FoodList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FoodList',
    component: FoodList
  },
  {
    path: '/journal',
    name: 'Journal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "journal" */ '../pages/Journal.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
