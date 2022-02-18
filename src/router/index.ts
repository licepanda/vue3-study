import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Layout from '@/layout/index.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: Login,
		},
		{
			path: '/home',
			component: Layout,
			name: 'home',
		},
		{
			path: '/dog',
			component: Layout,
			name: '狗子世界',
			// component: () => import('@/views/home/index')
			children: [
				{
					path: '/erha',
					name: '哈士奇',
					component: () => import('@/views/aaa.vue'),
				},
			],
		},
	],
});

export default router;
