
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'loginType', component: () => import('src/pages/loginType.vue') },
      { path: 'estabelecimento', name: 'acessoEstabelecimento', component: () => import('src/pages/estabelecimento/acessoEstabelecimento.vue') },
      { path: 'estabelecimento/login', name: 'loginEstabelecimento', component: () => import('src/pages/estabelecimento/loginEstabelecimento.vue') },
      { path: 'cliente', name: 'acessoCliente', component: () => import('src/pages/cliente/acessoCliente.vue') },
      { path: 'cliente/login', name: 'loginClinete', component: () => import('src/pages/cliente/loginCliente.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayoutSmall.vue'),
    children: [
      { path: 'estabelecimento/cadastro', name: 'cadastroEstabelecimento', component: () => import('src/pages/estabelecimento/cadastroEstabelecimento.vue') },
      { path: 'cliente/cadastro', name: 'cadastroCliente', component: () => import('src/pages/cliente/cadastroCliente.vue') },
      { path: 'cliente/cadastro/fianceiro', name: 'FinanceiroCliente', component: () => import('src/pages/cliente/financeiroCliente.vue') },
      { path: 'cliente/perfil', name: 'perfil', component: () => import('src/pages/cliente/perfil.vue') },
      { path: 'planos', name: 'planos', component: () => import('src/pages/planos.vue') },
      { path: 'lista/barbearias', name: 'barbearias', component: () => import('src/pages/barbearias.vue') },
      { path: 'lista/servicos', name: 'servicos', component: () => import('src/pages/servicos.vue') },
      { path: 'estabelecimento/cadastro/servicos', name: 'cadastroServicos', component: () => import('src/pages/cadastroServicos.vue') },
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayoutBackground.vue'),
    children: [
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
