import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bparty from '../views/Bparty.vue'
import work from '../views/work.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import consult from '../views/consult.vue'
import quality from '../views/quality.vue'
import parents from '../views/parents.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'Bparty',
      component:Bparty
    },
    {
      path: '/',
      name: 'work',
      component:work
    },
    {
      path: '/',
      name: 'Team',
      component:Team
    },
    {
      path: '/',
      name: 'Gallery',
      component:Gallery
    },
   { path: '/',
    name: 'consult',
    component:consult
  },
  { path: '/',
    name: 'parents',
    component:parents
  },
  { path: '/',
    name: 'quality',
    component:quality
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
