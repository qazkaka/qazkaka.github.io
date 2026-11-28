# Comfy Pocket website

Comfy Pocketの英語・日本語の紹介サイトです。Next.js / React、Tailwind CSS、shadcn/ui + Radix UI、Lucide、Motion、Magic UIを使用します。GitHub Pagesで既存の `/comfy-pocket/` と `/comfy-pocket/ja/` に静的配信できます。

## 開発

Node.js 24以降を使用してください。

```sh
npm ci
npm run dev
```

http://127.0.0.1:3011/comfy-pocket/ja/ を開きます。公開用ビルドの確認は `npm run build` の後に `npm run preview` で行います。ネットワーク上のサーバー、外部フォント、アプリの実サーバー接続は不要です。

## 検証

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
npm run build-storybook -- --disable-telemetry
```

Next.jsやStorybookがユーザー設定フォルダーに書き込めない環境では、`NEXT_TELEMETRY_DISABLED=1 STORYBOOK_DISABLE_TELEMETRY=1` を設定してください。Playwrightに既存のChromeを使う場合は `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` で実行できます。

PlaywrightはPC・スマートフォンで、日英ページ、全14画面の切り替えと画像の読み込み、矢印キー、FAQ、モバイルメニュー、320〜1440px幅、JavaScript無効時、既存サポート・プライバシーポリシーURLを検証します。axe-coreは両言語・明暗のWCAG 2 A/AA・2.1 AA自動検査を行います。自動検査に加え、キーボード操作と表示も確認してください。

`npm run storybook` で画面紹介、FAQ、ナビゲーション、ボタンを確認できます。

## 編集する場所

- `lib/content.ts`: 日英の本文・スクリーンショット説明
- `components/product-page.tsx`: ページの構成
- `components/screen-explorer.tsx`: 端末・画面切り替え
- `app/globals.css`: 配色、余白、画面幅、ダーク表示
- `lib/metadata.ts`: 言語ごとのタイトル、canonical、hreflang、OGP

公開準備中のため、ストアのダウンロードリンクは設置していません。通知機能の説明と動作条件は既存のサポートページに合わせています。実測データがないため、Rechartsによるグラフは追加していません。

shadcn/uiとMagic UIの部品は同じリポジトリの `web/monoklog/` から再利用しています。Magic UIのBlurFadeは、JavaScript無効時も本文が表示され、動きを減らす設定を尊重する実装です。利用条件は `THIRD_PARTY_NOTICES.md` を参照してください。

## GitHub Pagesへの反映

```sh
npm run build
npm run export-pages
```

`../../comfy-pocket/index.html`、`../../comfy-pocket/ja/index.html`、`../../comfy-pocket/_next/` が配信用の成果物です。これらをソースと一緒にコミットします。既存のブランチ公開方式とルートの `.nojekyll` を維持し、GitHub Pagesの公開設定は変更しません。

サポートとプライバシーポリシーは `../../comfy-pocket/` 内の既存HTMLが原本です。ビルド時にプレビュー用にコピーし、本文とURLを維持します。`export-pages` はホームのHTMLと `_next/` だけを書き換えます。
