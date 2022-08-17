import { createRouter, createWebHistory } from 'vue-router'

function loadPage(view, subfolder = null) {
  if(subfolder) {
      return () =>
          import(
            /* webpackChunkName: "view-[request]" */ `@/views/${subfolder}/${view}.vue`
          );
  }
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}

const routes = [
  {
    path: '/',
    name: 'Home',
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
    component: loadPage('BreedsView','breeds')
  },
  {
    path: '/breeds/:id',
    name: 'Breed',
    component: loadPage('BreedView','breeds'),
    props: true
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: loadPage('GalleryView', 'gallery'),
  },
  {
    path: '/gallery/:id',
    name: 'GalleryBreed',
    component: loadPage('GalleryBreed', 'gallery')
  },
  {
   path: '/likes',
   name: 'Likes',
   component: loadPage('LikesView'),
  },
  {
   path: '/favorites',
   name: 'Favorites',
   component: loadPage('FavoritesView'),
  },
  {
   path: '/dislikes',
   name: 'Dislikes',
   component: loadPage('DislikesView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link'
})

export default router
