import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Layout from '@/layout/index.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login,
			children:[]
		},
		{
			path: '/dashboard',
			component: Layout,
			redirect: '/dashboard',
			meta: { title: '首页', icon: 'test' },
			children:[
				{
					path: '/dashboard',
					name:'Dashboard',
					component: () => import('../views/Dashboard/index.vue'),
					meta: { title: '首页', icon: 'design' }
				  }
			]
		},
		{
			path: '/wel',
			name: 'wel',
			component: Layout,
			meta: { title: '设计管理', icon: 'test' },
			children: [{
			  path: '',
			  component: () => import('../views/wel/index.vue'),
			  meta: { title: '设计管理', icon: 'design' }
			}]
		  },
		  {
			path: '/metarial',
			name: 'metarial',
			component: Layout,
			meta: { title: '素材管理', icon: 'test' },
			children: [{
			  path: '',
			  component: () => import('../views/metarial/index.vue'),
			  meta: { title: '素材管理', icon: 'test' }
			}]
		  },
		  {
			path: '/permissions',
			name: 'permissions',
			component: Layout,
			meta: { title: '权限设置', icon: 'test' },
			children: [
			  {
				path: 'jus',
				component: () => import('../views/permissions/index.vue'),
				meta: { title: '权限管理', icon: 'test' }
			  },
			  {
				path: 'role',
				component: () => import('../views/permissions/role.vue'),
				meta: { title: '角色管理', icon: 'test' }
			  },
			]
		  }
	],
});

export default router;
