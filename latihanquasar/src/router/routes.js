
const routes = [
  {
    path: '/',
    component: () => import('layouts/registerlayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/loginpage.vue') },
      { path: 'register', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/mainlayout.vue'),
    children: [
      { path: 'home', name: 'dashboard', component: () => import('pages/index.vue') },
      { path: 'inputjadwal', name: 'inputJadwal', component: () => import('pages/InputJadwal.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
