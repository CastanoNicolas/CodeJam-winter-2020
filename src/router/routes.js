
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ShoppingList.vue') },
      { path: '/StockList', component: () => import('pages/StockList.vue') },
      { path: '/IngredientList', component: () => import('pages/IngredientList.vue') },
      { path: '/RecipeList', component: () => import('pages/RecipeList.vue') },
      { path: '/IngredientModification', component: () => import('pages/IngredientModification.vue') },
      { path: '/RecipeModification', component: () => import('pages/RecipeModification.vue') }
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
