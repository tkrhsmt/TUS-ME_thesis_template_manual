// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tkrhsmt.github.io',
	base: '/TUS-ME_thesis_template_manual',
	integrations: [
		starlight({
			title: '東京理科大学 機械航空宇宙工学科 学位論文テンプレートマニュアル',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tkrhsmt/TUS-ME_thesis_template_manual' }],
			defaultLocale: 'ja',
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{
					label: 'テンプレートマニュアル',
					items: [{ autogenerate: { directory: 'manual' } }],
				},
			],
		}),
	],
});
