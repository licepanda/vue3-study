<template>
	<el-row class="slidebar">
		<el-col class="sidebar-container">
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-menu
					class="el-menu-vertical-demo"
					:background-color="theme.menuBg"
					:text-color="theme.menuText"
					:active-text-color="theme.suMenuActiveText"
					@open="handleOpen"
					@close="handleClose"
				>
					<el-sub-menu index="1" class="hide-tile">
						<template #title>
							<span>父级菜单</span>
						</template>
						<el-menu-item index="#">子菜单1</el-menu-item>
						<el-menu-item index="#">子菜单2</el-menu-item>
						<el-menu-item-group title="Group One">
							<el-menu-item index="1-1">item one</el-menu-item>
							<el-menu-item index="1-2">item one</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组名字" class="default-menu">
							<el-menu-item index="#">分组里的菜单1</el-menu-item>
							<el-menu-item index="#">分组里的菜单2</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="1-4">
							<template #title>item four</template>
							<el-menu-item index="1-4-1">item one</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
					<el-menu-item index="2">
						<span>Navigator Two</span>
					</el-menu-item>
					<el-menu-item index="3">
						<span>Navigator Three</span>
					</el-menu-item>
					<el-menu-item index="4">
						<span>Navigator Four</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import theme from '@/styles/theme.scss';
export default defineComponent({
	setup() {
		return {
			theme,
		};
	},
});
</script>

<style lang="scss" scoped>
// 这里是个人覆盖的一些样式，喜欢官方的就不用加了
@import '@/styles/theme.scss';
.slidebar {
	//外套一个slidebar类。声明以下样式仅限slidebar的组件生效
	.sidebar-container {
		transition: width 0.5s;
		width: $sideBarWidth;
		background-color: $menuBg;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
		.el-menu-item.is-active {
			color: $subMenuActiveText !important;
			background-color: $menuActiveBg !important;
		}
		.horizontal-collapse-transition {
			transition: 0s width ease-in-out, 0s padding-left ease-in-out,
				0s padding-right ease-in-out;
		}

		.scrollbar-wrapper {
			overflow-x: hidden !important;
		}

		.el-scrollbar__bar.is-vertical {
			right: 0px;
		}

		.el-scrollbar {
			height: 100%;
		}

		&.has-logo {
			.el-scrollbar {
				height: calc(100% - 50px);
			}
		}

		.is-horizontal {
			display: none;
		}

		.svg-icon {
			margin-right: 16px;
		}

		.sub-el-icon {
			margin-right: 12px;
			margin-left: -2px;
		}

		.el-menu {
			border: none;
			height: 100%;
			width: 100% !important;
		}

		// menu hover
		.submenu-title-noDropdown,
		.el-submenu__title {
			&:hover {
				color: $subMenuActiveText !important;
				background-color: $menuHover !important;
			}
		}
		.el-submenu__title i {
			color: $subMenuActiveText !important;
		}
		.is-active > .el-submenu__title {
			color: $subMenuActiveText !important;
		}

		& .nest-menu .el-submenu > .el-submenu__title,
		& .el-submenu .el-menu-item {
			min-width: $sideBarWidth !important;
			background-color: #191a23 !important;

			&:hover {
				color: $subMenuActiveText !important;
				background-color: $subMenuHover !important;
			}
		}
		& .el-submenu .el-menu-item.is-active {
			color: $subMenuActiveText !important;
			background-color: $menuActiveBg !important;
		}
	}
}
</style>
