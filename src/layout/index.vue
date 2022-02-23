<template>
	<!-- 整体页面布局 -->
	<div class="common-layout">
		<el-container>
			<!-- 侧边栏 -->
			<el-aside width="200px" >
				<sidebar />
			</el-aside>
			<el-container>
				<!-- 顶部 -->
				<el-header >
					<Navbar class="header"/>
				</el-header>
				<!-- 主页面 -->
				<el-main >
					<router-view class="main"/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

</script>

<style scoped>
body {
	margin: 0;
	padding: 0;
	background-color: #F5F7F9;
}
.common-layout{
	background-color:#F5F7F9;
}
.common-layout .el-header {
	padding: 0;
	background-color: #fff;
	height: 50px;
}
.common-layout .el-aside {
	width: auto;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 200px;
}

.common-layout .el-main {
	color: var(--el-text-color-primary);
	background-color: #F4F6F8;
	padding: 0;
	/* margin:20px; */
	/* text-align: center; */
	/* line-height: 160px; */
}
.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
.header{
	border-bottom: 1px solid var(--color-border);
	padding:0px 10px;
	height: 50px;
	line-height: 50px;
	/* display: flex; */
}
.main{
	/* background-color: green; */
}
</style>
