import { fileURLToPath, URL } from 'url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
			// 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
			imports: ['vue', 'vue-router', 'pinia'],
			// 第三方组件库的解析器
			resolvers: [
				ElementPlusResolver({
					importStyle: 'sass',
				}),
			],
			dts: './types/auto-imports.d.ts',
			eslintrc: {
				enabled: true, // Default `false`
				filepath: './eslint/.eslintrc-auto-import.json',
				globalsPropValue: true,
			},
		}),
		Components({
			dirs: ['src/components/'],
			extensions: ['vue', 'md'],
			resolvers: [
				ElementPlusResolver({
					importStyle: 'sass',
				}),
				IconsResolver({
					customCollections: ['custom'],
					prefix: 'icon',
				}),
			],
			dts: './types/components.d.ts',
		}),
		Icons({
			compiler: 'vue3',
			customCollections: {
				custom: FileSystemIconLoader('./src/assets/icons'),
			},
		}),
		PkgConfig(),
		OptimizationPersist(),
	],
	server: {
		host: '0.0.0.0',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/element/index.scss" as *;`,
			},
		},
	},
});
