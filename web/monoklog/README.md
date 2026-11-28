# ものクログ Webサイト

Next.js / Reactで作る、ものクログの紹介サイトです。GitHub Pagesの既存URL `/monoklog/` に静的HTMLとして配信できます。サーバーや外部API、外部フォントは不要です。

## 開発

Node.js 24以降を使用します。

```sh
npm ci
npm run dev
```

http://127.0.0.1:3000/monoklog/ を開きます。Turbopackを利用できない環境では `npm run prepare-assets` のあとに `npx next dev --webpack --hostname 127.0.0.1 --port 3000` を使用してください。

## 検証

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
npm run build-storybook -- --disable-telemetry
```

PlaywrightはPC・スマホで、8画面の切り替え、キーボード操作、グラフの期間、FAQ、メニュー、既存URL、画像の読み込み、320px幅、JavaScript無効時の本文表示を確認します。axe-coreは明暗両方でWCAG 2 A/AA・2.1 AAの自動検査を行います。自動検査だけでアクセシビリティへの完全な適合を保証するものではありません。

`npm run storybook` で画面紹介・FAQ・グラフ・ボタンの部品を確認できます。

## GitHub Pagesへの反映

既存のブランチから公開する方式を継続します。

```sh
npm run build
npm run export-pages
```

`../../monoklog/index.html` と `../../monoklog/_next/` が配信用ファイルです。ソースと一緒にコミットします。リポジトリの既存の `.nojekyll` は維持してください。`main` への反映で既存のGitHub Pages公開処理が配信します。チェック用ワークフローはPagesの公開設定を変更しません。

`support.html`、`PrivacyPolicy.html`、`join/`、`app-ads.txt`、画像、ルートの `.well-known/apple-app-site-association`、他のアプリはそのまま維持します。既存の `#groups`、`#sync`、`#usage`、`#widget`、`#care`、`#share` も利用できます。

ローカル確認では `npm run build` のあと `npm run preview` を実行します。

## 編集する場所

- `app/page.tsx`: 紹介ページ全体・プラン比較
- `app/globals.css`: ブランドカラー・文字・余白・レスポンシブ表示・ダーク表示
- `lib/content.ts`: 画面紹介・FAQ・App Storeリンク
- `components/`: 操作のある部品、shadcn/ui、Magic UI
- `scripts/prepare-assets.mjs`: 既存の静的ページと画像をビルド用にコピー
- `scripts/secure-export.mjs`: インラインスクリプトのハッシュを使用するCSPを追加

Rechartsのグラフは機能説明用の架空データで、アプリの記録には接続しません。実際のアプリ画面と区別して表示しています。Proの価格は変動するため、App Storeでの確認に誘導します。

shadcn/uiとMagic UIの公式レジストリのコンポーネントを使用しています。Magic UIのBlurFadeは、初期HTMLを隠さず、動きを減らす設定を尊重するように調整しています。利用条件は `THIRD_PARTY_NOTICES.md` を参照してください。
