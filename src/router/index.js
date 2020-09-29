import Vue from 'vue'
import VueRouter from 'vue-router'
import EgLayout from '@/views/eg'
import DocLayout from '@/views/eg/doc'

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
  // demo
  {
    path: '/eg',
    name: 'eg',
    component: EgLayout,
    children: [
      {
        path: 'toast',
        name: 'eg-toast',
        meta: {
          title: 'Toast 提示框',
          path: 'toast'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/toast/index.vue')
      },
      {
        path: 'indicator',
        name: 'eg-indicator',
        meta: {
          title: 'Indicator 加载指示框',
          path: 'indicator'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/indicator/index.vue')
      },
      {
        path: 'scroll-y',
        name: 'eg-scroll-y',
        meta: {
          title: 'Scroll-Y 列表滑动',
          path: 'scroll-y'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/scroll-y/index.vue')
      },
      {
        path: 'tab',
        name: 'eg-tab',
        meta: {
          title: 'Tab 选项卡',
          path: 'tab'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/tab/index.vue')
      },
      {
        path: 'popup',
        name: 'eg-popup',
        meta: {
          title: 'popup 弹层',
          path: 'popup'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/popup/index.vue')
      },
      {
        path: 'picker',
        name: 'eg-picker',
        meta: {
          title: 'Picker 选择器',
          path: 'picker'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/picker/index.vue')
      },
      {
        path: 'popup-select',
        name: 'eg-popup-select',
        meta: {
          title: 'Popup-Select 弹层选择框',
          path: 'popup-select'
        },
        component: () =>
          import(
            /* webpackChunkName: "eg" */ '@/views/eg/popup-select/index.vue'
          )
      },
      {
        path: 'button',
        name: 'eg-button',
        meta: {
          title: 'Button 按钮',
          path: 'button'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/button/index.vue')
      },
      {
        path: 'cell',
        name: 'eg-cell',
        meta: {
          title: 'Cell 单元格',
          path: 'cell'
        },
        component: () =>
          import(/* webpackChunkName: "eg" */ '@/views/eg/cell/index.vue')
      }
    ]
  },
  // 文档
  {
    path: '/doc/:id',
    name: 'doc',
    component: DocLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
