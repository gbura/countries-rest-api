import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/country/:name',
			name: 'country',
			component: () => import('@/views/CountryDetailsView.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			redirect: '/',
		},
	],
})

export default router
