
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'loginType', component: () => import('src/pages/loginType.vue') },
      { path: 'acesso-estabelecimento', name: 'mainAccess', component: () => import('src/pages/mainAccess.vue') },
    ]
  },
  {
    path: '/cadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'cadastroEstabelecimento', component: () => import('src/pages/cadastroEstabelecimento.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'loginEstabelecimento', component: () => import('src/pages/loginEstabelecimento.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
