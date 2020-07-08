const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/loginuser.vue') },
      { path: 'loginadmin', name: 'loginadmin', component: () => import('pages/loginadmin.vue') },
      { path: 'registerr', component: () => import('pages/registerr.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'homeadmin', name: 'dashboard', component: () => import('pages/homeadmin.vue') },
      { path: 'RoyalClasst', name: 'RoyalClass', component: () => import('pages/RoyalClass.vue') },
      { path: 'ExecutiveClass', name: 'ExecutiveClass', component: () => import('pages/ExecutiveClass.vue') },
      { path: 'BusinessClass', name: 'BusinessClass', component: () => import('pages/BusinessClass.vue') },
      { path: 'pemesanan', name: 'pemesanan', component: () => import('pages/pemesanan.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'homeusr', name: 'homeusr', component: () => import('pages/homeusr.vue') },
      { path: 'RoyalClass', name: 'RoyalClass', component: () => import('pages/RoyalClass.vue') },
      { path: 'ExecutiveClass', name: 'ExecutiveClass', component: () => import('pages/ExecutiveClass.vue') },
      { path: 'BusinessClass', name: 'BusinessClass', component: () => import('pages/BusinessClass.vue') },
      { path: 'pemesanan', name: 'pemesanan', component: () => import('pages/pemesanan.vue') }
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
