import { createRouter, createWebHistory } from 'vue-router'

function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadPage('HomeView')
  },
  {
    path: '/voting',
    name: 'Voting',
    component: loadPage('VotingView')
  },
  {
    path: '/breeds',
    name: 'Breeds',
    component: loadPage('BreedsView')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: loadPage('GalleryView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: ''
})

export default router
