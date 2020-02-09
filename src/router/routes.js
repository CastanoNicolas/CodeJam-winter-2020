
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/StockList.vue') },
      { path: '/ShoppingList', component: () => import('pages/ShoppingList.vue') },
      { path: '/IngredientList', component: () => import('pages/IngredientList.vue') },
      { path: '/RecipeList', component: () => import('pages/RecipeList.vue') }
    ]
  },
  {
    path: '/RecipeView',
    component: () => import('layouts/RecipeLayout.vue'),
    children: [
      { path: '/RecipeView/:recipeName', component: () => import('pages/RecipeView.vue') },
      { path: '/RecipeView/Edit/:recipeName', component: () => import('pages/RecipeEdit.vue') }
    ]
  },
  {
    path: '/IngredientEdit',
    component: () => import('layouts/IngredientLayout.vue'),
    children: [
      { path: '/IngredientEdit/:ingredientName', component: () => import('pages/IngredientEdit.vue') },
      { path: '/IngredientNew', component: () => import('pages/IngredientNew.vue') }
    ]
  },
  {
    path: '/RecipeNew',
    component: () => import('layouts/RecipeNewLayout.vue'),
    children: [
      { path: '/RecipeNew', component: () => import('pages/RecipeNew.vue') }
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
