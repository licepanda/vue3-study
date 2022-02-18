<template>
	<div>
		<div class="bg-banner">
			<div id="login-box">
				<div class="login-banner"></div>
				<div class="login-form">
					<el-form ref="formRef" :model="form" label-width="120px">
						<el-form-item label="Activity name">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="Activity name">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="Activity name">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary">Create</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		const form = {
			name: '',
		};
		return {
			form,
		};
	},
});
</script>

<style lang="scss" scoped>
.bg-banner {
	z-index: 0;
	height: 100%;
	background-image: url(../assets/images/login-bg.jpg);
	background-size: cover;
	background-position: center center;
}
#login-box {
	display: flex;
	justify-content: space-between;
	top: 50%;
	left: 50%;
	background: rgba(255, 255, 255, 0.8);
	transform: translateX(-50%) translateY(-50%);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 0 5px #999;
	.login-banner {
		width: 300px;
		background-image: url(../assets/images/logo.png);
		background-size: 48% 40%;
		background-position: center center;
		background-repeat: no-repeat;
	}
	.login-form {
		width: 450px;
		padding: 50px 35px 30px;
		// overflow: hidden;
	}
}
</style>
