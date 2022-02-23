<template>
	<el-menu
		:default-active="activeMenu"
		active-text-color="#ffd04b"
		class="el-menu-vertical-demo"
		:collapse="appStores.sidebar.opened"
		unique-opened
		:collapse-transition="true"
		router
	>
		<template v-for="item in allRoutes" :key="item.path">
			<template v-if="!item.hidden">
				<template v-if="item.children && item.children.length === 1">
					<el-menu-item :index='item.path'>
							<SvgIcon class="iconfont" :name="item.children[0].meta.icon"></SvgIcon>
							<template #title>{{item.children[0].meta.title}}</template>
						</el-menu-item>
				</template>
				<el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
					<template #title>
						<SvgIcon class="iconfont" :name="item.children[0].meta.icon"></SvgIcon>
							<span>{{item.meta.title}}</span>
					</template>
					<span v-for="child in item.children" :key="child.path">
						<el-menu-item :index="item.path + `/` + child.path">
							<template #title>{{ child.meta.title }}</template>
							</el-menu-item
						>
					</span>
				</el-sub-menu>
			</template>
		</template>
	</el-menu>
</template>

<script lang="ts" setup>
import {appStore} from '@/stores/app'
import {
	Location,
	Document,
	Menu as IconMenu,
	Setting,
} from '@element-plus/icons-vue';

const allRoutes = useRouter().options.routes;
const appStores = appStore()
const route = useRoute();
const activeMenu = computed(() => {
	const { path } = route;
	return path;
});

</script>

<style scoped>
.el-menu--collapse {
	height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
	height: 100vh;
}
.iconfont{
	width: 15px;
	height: 15px;
	margin-right: 10px;
}
.el-menu-item *  {
	vertical-align: middle;
}

</style>
