export const apps = [
  {
    id: "monoklog",
    name: "ものクログ",
    english: "MONOKLOG",
    number: "01",
    tagline: "好きなものと、\nもっといい毎日。",
    description:
      "持ち物も、欲しい物も、手放した物も。写真や使った記録と一緒に、自分だけのコレクションを育てるアプリです。",
    platforms: ["iPhone", "iPad"],
    category: "持ち物・コレクション管理",
    href: "/monoklog/",
    support: "/monoklog/support.html",
    privacy: "/monoklog/PrivacyPolicy.html",
    icon: "/monoklog/images/icon-512.png",
    screenshot: "/monoklog/images/screens/iphone-01-collection.jpg",
    screenshotAlt: "ものクログの写真付きコレクション一覧画面",
    detail: "写真と記録で、お気に入りをひとまとめに。",
  },
  {
    id: "comfy-pocket",
    name: "Comfy Pocket",
    english: "COMFY POCKET",
    number: "02",
    tagline: "創作の続きを、\n手のひらから。",
    description:
      "PCで動かしているComfyUIを、いつものスマートフォンやタブレットから。ワークフローの操作も、生成した画像の確認も手元で。",
    platforms: ["iPhone", "iPad", "Android"],
    category: "ComfyUI モバイルクライアント",
    href: "/comfy-pocket/",
    support: "/comfy-pocket/support.html",
    privacy: "/comfy-pocket/PrivacyPolicy.html",
    icon: "/comfy-pocket/images/icon-512.png",
    screenshot: "/comfy-pocket/images/screens/ja/iphone-03-result.jpg",
    screenshotAlt: "Comfy Pocketで生成した画像を確認する画面",
    detail: "ご利用にはPC上で動くComfyUIが必要です。",
  },
] as const;
export type App = (typeof apps)[number];
