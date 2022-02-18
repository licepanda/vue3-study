<template>
	<div class="bg-banner"></div>
	<div class="login-box">
		<div class="login-banner"></div>
		<el-form ref="ruleFormRef" :model="form" class="login-form" :rules="rules">
			<div class="title-container">
				<h3 class="title">{{ title }}</h3>
			</div>
			<el-form-item prop="username">
				<el-input v-model="form.username" placeholder="用户名">
					<template #prefix>
						<icon-custom-logo
							alt="Vue logo"
							class="logo"
							width="15"
							height="15"
						/>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					v-model="form.password"
					:prefix-icon="Lock"
					placeholder="密码"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button
					type="primary"
					style="width: 100vw"
					:loading="loading"
					@click="submitForm(ruleFormRef)"
					>登录</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Avatar, Lock } from '@element-plus/icons-vue';
import type { ElForm } from 'element-plus';
import { useRouter } from 'vue-router';

type FormInstance = InstanceType<typeof ElForm>;

let router = useRouter();
const ruleFormRef = ref<FormInstance>();
const title = '环雅丽都资产管理系统';
const form = reactive({
	username: '',
	password: '',
});
const rules = {
	username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
	password: [
		{ required: true, trigger: 'blur', message: '请输入密码' },
		// { min: 5, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
	],
};
let loading = ref(false);
const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate((valid) => {
		if (valid) {
			loading.value = true;
			ElMessage({
				message: '登陆成功',
				type: 'success',
			});
			router.push({ path: '/Home' });
		} else {
			return false;
		}
	});
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
	.login-banner {
		display: none;
	}
}
.bg-banner {
	position: absolute;
	z-index: 0;
	width: 100vw;
	height: 100vh;
	background-image: url(../assets/images/login-bg.jpg);
	background-size: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}
.login-box {
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translateX(-50%) translateY(-50%);
	background: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 0 5px #999;

	.login-banner {
		width: 250px;
		background-image: url(../assets/images/logo.png);
		background-size: 48% 40%;
		background-position: center center;
		background-repeat: no-repeat;
		border-right: 2px solid #efefef;
	}
	.login-form {
		width: 450px;
		padding: 50px 35px 30px;
		overflow: hidden;
		.title-container {
			position: relative;
			.title {
				font-size: 22px;
				color: #666;
				margin: 0 auto 30px;
				text-align: center;
				font-weight: bold;
				// @include text-overflow;
			}
		}
		.logo {
			height: 32px;
			line-height: 32px;
		}
	}
}
</style>
