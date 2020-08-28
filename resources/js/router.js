import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import FirstPage from './components/pages/myFirstPage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks.vue'
import home from './components/pages/home'
import tags from './components/pages/tags'

const routes = [{
        path: '/',
        component: home
    },

    {
        path: '/tags',
        component: tags
    },








    {
        path: '/my-new-vue-route',
        component: FirstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    },

    // Vue hooks
    {
        path: '/hooks',
        component: hooks
    }

]

export default new Router({
    mode: 'history',
    routes
})