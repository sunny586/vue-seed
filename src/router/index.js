import Vue from 'vue'
import VueRouter from 'vue-router'
import EgLayout from '@/views/eg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/index.vue')
  },
  {
    path: '/eg',
    name: 'eg',
    component: EgLayout,
    children: [
      {
        path: 'toast',
        name: 'eg-toast',
        meta: {
          title: 'toast组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/toast/index.vue')
      },
      {
        path: 'indicator',
        name: 'eg-indicator',
        meta: {
          title: 'indicator组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/indicator/index.vue')
      },
      {
        path: 'scroll-y',
        name: 'eg-scroll-y',
        meta: {
          title: 'scroll-y组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/scroll-y/index.vue')
      },
      {
        path: 'tab',
        name: 'eg-tab',
        meta: {
          title: 'tab组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/tab/index.vue')
      },
      {
        path: 'popup',
        name: 'eg-popup',
        meta: {
          title: 'popup组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/popup/index.vue')
      },
      {
        path: 'picker',
        name: 'eg-picker',
        meta: {
          title: 'picker组件'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/picker/index.vue')
      },
      {
        path: 'popup-select',
        name: 'eg-popup-select',
        meta: {
          title: 'popup-select组件'
        },
        component: () =>
          import(
            /* webpackChunkName: "eg" */ '@/views/eg/popup-select/index.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
