// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import addClasses from 'rehype-class-names';

// https://astro.build/config
export default defineConfig({
	site: 'https://tsukahara-lab.github.io',
	base: '/TUS-ME_thesis_template_manual',
	markdown: {
		// Starlight uses the Sätteri processor by default. starlight-katex 0.0.4
		// registers legacy remark/rehype plugins, which Sätteri does not execute.
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex, [addClasses, { '.katex': 'not-content' }]],
		}),
	},
	integrations: [
		starlight({
			title: '東京理科大学 機械航空宇宙工学科 学位論文テンプレートマニュアル',
			customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tsukahara-lab/TUS-ME_thesis_template_manual' }],
			defaultLocale: 'ja',
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{
					label: 'テンプレートマニュアル',
					items: [{ autogenerate: { directory: 'manual' } }],
				},
				{
					label: 'テンプレート API',
					items: [{ autogenerate: { directory: 'api' } }],
				},
			],
		}),
	],
});
