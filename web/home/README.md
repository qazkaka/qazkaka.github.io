# qazkaka トップページ

サイト最上位 `/` だけを生成する Next.js / React の静的サイトです。
`monoklog/`、`comfy-pocket/`、既存の `web/monoklog/` は編集しません。

## 開発・検証

Node.js 24以降で実行します。

```sh
cd web/home
npm ci
npm run dev
```

開発サーバー: http://127.0.0.1:3100/

```sh
npm run build
npm run typecheck
npm run export-pages
npx playwright install chromium
npm run test:e2e
npm run build-storybook -- --disable-telemetry
```

`npm run preview` はリポジトリ最上位をポート3100で配信し、既存ページへの遷移も確認できます。
PlaywrightはPC・スマホ、320px幅、キーボード操作、既存リンク、画像、JavaScript無効時、明暗両テーマのaxe-core検査を行います。

## 出力と公開

`npm run export-pages` が書き込むのは `../../index.html` と `../../homepage-assets/_next/` の2か所だけです。
画像は各アプリの既存URLをそのまま参照します。元画像をアプリ配下に書き戻す処理はありません。
CSPはビルドされたインラインスクリプトのSHA-256ハッシュを指定し、`unsafe-eval` は使いません。
GitHub Pagesの既存の公開方式・`.nojekyll` を使用できます。公開はソースと上記出力をGitHubに反映したときに行われます。

- `app/page.tsx`: トップページの構成
- `app/globals.css`: 色・レイアウト・レスポンシブ表示・動きを減らす設定
- `lib/content.ts`: トップページに掲載するアプリ情報と既存リンク
- `components/`: shadcn/ui + Radix UI、Lucide、Motion + Magic UI
- `.storybook/`: コンポーネント表示とアクセシビリティ補助
- `tests/`: Playwright + axe-core

Rechartsはトップページにグラフの用途がないため追加しません。既存のものクログ内の実装には変更を加えていません。
ライセンス表記は `THIRD_PARTY_NOTICES.md` を参照してください。
