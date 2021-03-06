/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended',
		'./eslint/.eslintrc-auto-import.json',
		'vue-global-api',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
};
