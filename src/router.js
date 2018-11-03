import Vue from 'vue'
import Router from 'vue-router'
import skills from './components/skills.vue'
import about from './components/about.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: skills
    },
        {
            path: '/about',
            name: 'about',
            component: about
    }
  ]
})
