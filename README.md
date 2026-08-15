# 東京理科大学 機械航空宇宙工学科 学位論文テンプレートマニュアル

東京理科大学創域理工学部 機械航空宇宙工学科の卒業論文、および同大学大学院創域理工学研究科 機械航空宇宙工学専攻の修士論文向けに提供している、LaTeX・Typst テンプレートの利用マニュアルです。

このサイトでは、環境構築、本文・図表・参考文献の書き方、提出前の確認事項に加え、テンプレートで使用できるコマンドの API リファレンスを掲載しています。

> [!CAUTION]
> 本マニュアルおよびテンプレートは非公式です。利用により生じた問題について、東京理科大学、学科、塚原研究室および関係者は責任を負いません。

## 公開サイト・関連リポジトリ

- [マニュアルを読む](https://tsukahara-lab.github.io/TUS-ME_thesis_template_manual/)
- [LaTeX テンプレート](https://github.com/tsukahara-lab/TUS-ME_thesis_template)
- [Typst テンプレート](https://github.com/tsukahara-lab/TUS-ME_thesis_typst_template)

テンプレートの使い方については、まず公開サイトの[はじめに](https://tsukahara-lab.github.io/TUS-ME_thesis_template_manual/manual/introduction/)と[環境構築・操作方法](https://tsukahara-lab.github.io/TUS-ME_thesis_template_manual/manual/howtouse/)を参照してください。

## このリポジトリについて

このリポジトリはテンプレート本体ではなく、その利用マニュアルを管理する Astro + Starlight プロジェクトです。本文は `src/content/docs/` 以下の MDX ファイルで管理しています。

```text
.
├── public/                 # マニュアル内で使用する静的ファイル・画像
├── src/
│   ├── assets/             # Astro が処理する画像などのアセット
│   ├── content/
│   │   └── docs/           # マニュアル本文とテンプレート API リファレンス
│   └── styles/             # サイトのカスタムスタイル
├── astro.config.mjs        # Astro / Starlight の設定
├── package.json
└── tsconfig.json
```

- `src/content/docs/manual/`: テンプレートの導入・執筆・提出に関するガイド
- `src/content/docs/api/latex/`: LaTeX テンプレートのコマンドリファレンス
- `src/content/docs/api/typst/`: Typst テンプレートの関数・設定リファレンス

## ローカルでの編集・確認

Node.js と npm を用意したうえで、リポジトリのルートで次を実行します。

```sh
npm install
npm run dev
```

開発サーバーを起動すると、通常は `http://localhost:4321/TUS-ME_thesis_template_manual/` で確認できます。公開前にはビルドが成功することを確認してください。

```sh
npm run build
```

## コマンド一覧

すべてのコマンドは、プロジェクトのルートディレクトリで実行します。

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ライセンス・問い合わせ

テンプレート本体の利用条件および不具合報告は、それぞれのテンプレートリポジトリを確認してください。マニュアルの誤記や改善提案は、このリポジトリの Issue または Pull Request でお知らせください。
