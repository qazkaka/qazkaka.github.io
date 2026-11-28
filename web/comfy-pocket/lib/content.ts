export type Locale = "en" | "ja";
export const basePath = "/comfy-pocket";
export const sitePath = (locale: Locale) =>
  `${basePath}/${locale === "ja" ? "ja/" : ""}`;
export const asset = (path: string) => `${basePath}/images/${path}`;
export const copy = {
  ja: {
    title: "Comfy Pocket — 自宅のComfyUIを、手のひらに。",
    description:
      "PCで動かしているComfyUIを、iPhone・iPad・Androidから。ワークフローの実行、画像の保存・共有、出力フォルダーの整理まで、手のひらで。",
    nav: ["できること", "アプリの画面", "はじめかた"],
    skip: "本文へ移動",
    language: "表示言語",
    menu: "メニュー",
    close: "閉じる",
    badge: "App Store・Google Playで公開準備中",
    eyebrow: "YOUR COMFYUI. IN YOUR POCKET.",
    heading: ["自宅のComfyUIを、", "手のひらに。"],
    lead: "ひらめいたら、スマホから。いつものPCのワークフローに写真やプロンプトを送って、生成・編集・保存まで。つくる時間を、もっと身近に。",
    primary: "アプリの画面を見る",
    secondary: "はじめかた",
    heroCaption: "あなたのPCで生成。スマホで、次のひらめきへ。",
    connected: "いつものComfyUIにつながる",
    run: "生成したら、そのまま次の入力に",
    facts: [
      "iPhone・iPad・Android",
      "自分のPC・サーバーで生成",
      "アカウント登録不要",
    ],
    flowEyebrow: "FROM DESKTOP TO ANYWHERE",
    flowTitle: "いつものワークフローを、\nいつものスマホで。",
    flowLead:
      "ComfyUIはPCで。その操作は、手元で。ノードのつながりを、使いやすい入力画面に変えます。",
    steps: [
      {
        title: "自分のサーバーにつなぐ",
        text: "ComfyUIが動くPCの接続先を登録。同じWi-FiやVPNから接続できます。",
      },
      {
        title: "ワークフローを持ち込む",
        text: "「Export (API)」のJSONを取り込むだけ。入力項目の名前や並び順も調整できます。",
      },
      {
        title: "写真や言葉で、つくりはじめる",
        text: "入力して実行したら、進み具合を確認。できあがった画像は保存・共有・次の入力に。",
      },
    ],
    flowCaption: "iPadでは、広い画面でサーバーの出力を一覧。",
    screensEyebrow: "A CLOSER LOOK",
    screensTitle: "手元で、ここまで。",
    screensLead:
      "サーバーへの接続から、できあがった画像の整理まで。実際のアプリ画面でご覧ください。",
    deviceLabel: "端末を選択",
    screenLabel: "画面を選択",
    previous: "前の画面",
    next: "次の画面",
    demoNote:
      "スクリーンショットはデモ用サーバーで撮影したサンプルです。アプリは日本語・英語に対応しています。",
    featuresEyebrow: "MADE FOR YOUR CREATIVE FLOW",
    featuresTitle: "ひらめきの、その先も。",
    features: [
      {
        title: "写真から、次の一枚へ",
        text: "写真ライブラリ、ファイル、サーバー上の画像。使いたい一枚を選んで、ワークフローの入力に。",
        icon: "image",
      },
      {
        title: "できた画像を、次の素材に",
        text: "「入力に使う」で、結果をそのまま別のワークフローへ。保存して選び直す手間を省けます。",
        icon: "repeat",
      },
      {
        title: "PCの出力も、手元で整理",
        text: "入力・出力画像の一覧から保存や共有。拡張ノードとPC側の許可があれば、削除にも対応します。",
        icon: "folder",
      },
      {
        title: "生成の進み具合が分かる",
        text: "iPhoneのライブアクティビティ、Androidの通知で進捗を確認。OSによる動作条件はサポートをご覧ください。",
        icon: "bell",
      },
      {
        title: "自宅も、スタジオも",
        text: "複数のComfyUIサーバーを登録して切り替え。サーバーごとにアプリ内ロックを設定できます。",
        icon: "server",
      },
      {
        title: "入力画面を、自分仕様に",
        text: "プロンプト、Seed、画像など、必要な項目だけを表示。名前と順序も、使いやすい形に整えられます。",
        icon: "sliders",
      },
    ],
    privacyEyebrow: "YOUR SERVER. YOUR CREATIONS.",
    privacyTitle: "つくるものは、あなたのもの。",
    privacyText:
      "写真やプロンプトは、登録したComfyUIサーバーに直接送信。開発者のサーバーを経由しません。アカウント登録も、広告も、トラッキングもありません。",
    privacyLink: "プライバシーポリシーを読む",
    phone: "あなたのスマホ",
    server: "あなたのComfyUI",
    direct: "直接接続",
    startEyebrow: "READY WHEN YOU ARE",
    startTitle: "準備は、いつものPCから。",
    startText:
      "アプリの利用には、ComfyUIが動いているPCと、そこに届くネットワークが必要です。",
    requirements: [
      {
        title: "ComfyUIが動くPC・サーバー",
        text: "モデルやカスタムノードはPC側で用意します。画像の生成はサーバーで行います。",
      },
      {
        title: "PCにつながるネットワーク",
        text: "同じWi-Fi、TailscaleなどのVPN、または認証を設定したHTTPS接続。",
      },
      {
        title: "対応するスマホ・タブレット",
        text: "iOS・iPadOS 17以降、またはAndroid 10以降に対応しています。",
      },
    ],
    guide: "接続手順を詳しく見る",
    faqTitle: "気になることを、先に。",
    faq: [
      {
        question: "スマホだけで画像を生成できますか？",
        answer:
          "画像の生成は、登録したPCやサーバーのComfyUIで行います。Comfy Pocketは、そのワークフローをスマホから操作するクライアントアプリです。アプリ内の「デモを試す」では、PCがなくてもサンプル画像で操作を試せます。",
      },
      {
        question: "外出先からも使えますか？",
        answer:
          "スマホからPCに接続できるネットワークがあれば使えます。TailscaleなどのVPNや、認証を設定したHTTPSのリバースプロキシを利用してください。接続設定の詳細はサポートページにあります。",
      },
      {
        question: "どのワークフローを取り込めますか？",
        answer:
          "ComfyUIの「Export (API)」で書き出したJSONに対応しています。必要なモデルとカスタムノードは、接続先のComfyUIに用意してください。画面形式のJSONやPNG内のワークフローには対応していません。",
      },
      {
        question: "アプリを閉じても通知されますか？",
        answer:
          "Androidでは通知を有効にすると、バックグラウンドでも実行状態を確認します。iOS 26以降ではアプリを閉じたあとも確認を続けますが、強制終了やOSの制限で止まることがあります。以前のiOSでは、バックグラウンドに移ってから約30秒で確認が止まります。詳しくはサポートページをご覧ください。",
      },
    ],
    soonTitle: "つくる場所を、もっと自由に。",
    soonText: "Comfy Pocketは、App StoreとGoogle Playで公開準備中です。",
    support: "サポート",
    privacy: "プライバシーポリシー",
    allApps: "qazkakaのアプリ",
    unofficial:
      "Comfy PocketはComfyUIの非公式クライアントです。ComfyUIの開発元とは関係ありません。",
  },
  en: {
    title: "Comfy Pocket — Your ComfyUI, in your pocket.",
    description:
      "Your own ComfyUI, from iPhone, iPad and Android. Run workflows, save and share images, and browse your PC’s outputs from your phone.",
    nav: ["Features", "The app", "Get started"],
    skip: "Skip to content",
    language: "Language",
    menu: "Menu",
    close: "Close",
    badge: "Coming soon to the App Store & Google Play",
    eyebrow: "YOUR COMFYUI. IN YOUR POCKET.",
    heading: ["Your ComfyUI.", "A little closer."],
    lead: "An idea, a photo, a few words. Send them to the workflows on your own PC, then generate, edit and save — right from your phone. Make room for your next idea.",
    primary: "Explore the app",
    secondary: "Get started",
    heroCaption: "Made on your PC. Ready for your next idea.",
    connected: "Connected to your own ComfyUI",
    run: "From a finished image to your next input",
    facts: [
      "iPhone, iPad & Android",
      "Generated on your own PC",
      "No account required",
    ],
    flowEyebrow: "FROM DESKTOP TO ANYWHERE",
    flowTitle: "Your familiar workflows.\nA much smaller screen.",
    flowLead:
      "Keep ComfyUI on your PC. Keep the controls close. Turn your connected nodes into simple, useful input screens.",
    steps: [
      {
        title: "Connect your own server",
        text: "Add the address of the PC running ComfyUI. Connect over the same Wi-Fi or a VPN.",
      },
      {
        title: "Bring your workflows",
        text: "Import the JSON from “Export (API)”. Choose the input fields, names and order that work for you.",
      },
      {
        title: "Start with a photo or a few words",
        text: "Fill in your inputs, tap Run, and follow the progress. Save, share or use the result as your next input.",
      },
    ],
    flowCaption: "A little more room: browse your server’s outputs on iPad.",
    screensEyebrow: "A CLOSER LOOK",
    screensTitle: "Small screen. Room to create.",
    screensLead:
      "From connecting your server to organizing the results. Take a look around the actual app.",
    deviceLabel: "Choose a device",
    screenLabel: "Choose a screen",
    previous: "Previous screen",
    next: "Next screen",
    demoNote:
      "Screenshots use a demo server and sample images. The app is available in English and Japanese.",
    featuresEyebrow: "MADE FOR YOUR CREATIVE FLOW",
    featuresTitle: "Keep the ideas moving.",
    features: [
      {
        title: "Start with your photos",
        text: "Pick an image from Photos, Files, or your server. Put it straight into your workflow.",
        icon: "image",
      },
      {
        title: "One result. Another beginning.",
        text: "“Use as input” passes a finished image to another workflow. No need to save and pick it again.",
        icon: "repeat",
      },
      {
        title: "Your output folder, closer",
        text: "Browse, save and share your inputs and outputs. The companion node also supports deletion when enabled on your PC.",
        icon: "folder",
      },
      {
        title: "Keep an eye on progress",
        text: "Follow runs with Live Activities on iPhone and notifications on Android. Check Support for OS-specific conditions.",
        icon: "bell",
      },
      {
        title: "Home, studio, everywhere",
        text: "Add and switch between multiple ComfyUI servers. Set an in-app passcode lock for each one.",
        icon: "server",
      },
      {
        title: "Inputs that work for you",
        text: "Show the prompts, seeds and images you need. Adjust their names and order to suit your workflow.",
        icon: "sliders",
      },
    ],
    privacyEyebrow: "YOUR SERVER. YOUR CREATIONS.",
    privacyTitle: "What you create stays yours.",
    privacyText:
      "Your photos and prompts go directly to the ComfyUI servers you add. They never pass through a developer server. No account, no ads, no tracking.",
    privacyLink: "Read the privacy policy",
    phone: "Your phone",
    server: "Your ComfyUI",
    direct: "Direct connection",
    startEyebrow: "READY WHEN YOU ARE",
    startTitle: "It starts with your own PC.",
    startText:
      "You’ll need a PC running ComfyUI and a network connection that lets your phone reach it.",
    requirements: [
      {
        title: "A PC or server with ComfyUI",
        text: "Install models and custom nodes on your PC. Image generation happens on that server.",
      },
      {
        title: "A way to reach your PC",
        text: "The same Wi-Fi, a VPN such as Tailscale, or an authenticated HTTPS connection.",
      },
      {
        title: "A compatible phone or tablet",
        text: "iOS or iPadOS 17 or later, or Android 10 or later.",
      },
    ],
    guide: "Read the connection guide",
    faqTitle: "A few things you might wonder.",
    faq: [
      {
        question: "Can my phone generate images on its own?",
        answer:
          "Generation happens in ComfyUI on the PC or server you add. Comfy Pocket is a client that runs those workflows from your phone. The in-app “Try demo” option lets you explore the controls with sample images, even without a PC.",
      },
      {
        question: "Can I use it away from home?",
        answer:
          "Yes, if your phone can reach your PC. Use a VPN such as Tailscale or an authenticated HTTPS reverse proxy. You can find connection details on the Support page.",
      },
      {
        question: "Which workflows can I import?",
        answer:
          "Import the JSON from ComfyUI’s “Export (API)”. The required models and custom nodes must be installed on the connected ComfyUI server. UI-format JSON and workflows embedded in PNG files are not supported.",
      },
      {
        question: "Will I get notified after closing the app?",
        answer:
          "With notifications enabled, Android continues checking the run in the background. iOS 26 and later can also keep checking, but force-quitting or OS restrictions may stop it. Earlier iOS versions stop checking after about 30 seconds in the background. See Support for details.",
      },
    ],
    soonTitle: "Make room for your next idea.",
    soonText: "Comfy Pocket is coming soon to the App Store and Google Play.",
    support: "Support",
    privacy: "Privacy policy",
    allApps: "Apps by qazkaka",
    unofficial:
      "Comfy Pocket is an unofficial ComfyUI client and is not affiliated with the ComfyUI developers.",
  },
} as const;
export type Copy = (typeof copy)[Locale];
export const devices = ["iphone", "ipad", "duo", "android"] as const;
export type Device = (typeof devices)[number];
export const deviceNames: Record<Device, string> = {
  iphone: "iPhone",
  ipad: "iPad",
  duo: "iPhone Duo",
  android: "Android",
};
export const screens: Record<
  Device,
  {
    file: string;
    title: Record<Locale, string>;
    text: Record<Locale, string>;
  }[]
> = {
  iphone: [
    {
      file: "iphone-01-server",
      title: {
        ja: "サーバーを、ひとつの画面に。",
        en: "Your server, at a glance.",
      },
      text: {
        ja: "ワークフロー、履歴、出力一覧。つくるための入口を、ここに。",
        en: "Workflows, history and outputs. A starting point for everything you make.",
      },
    },
    {
      file: "iphone-02-workflow",
      title: { ja: "入力する。あとは、実行。", en: "Your inputs. Then, Run." },
      text: {
        ja: "プロンプトやサイズを調整して、PCのワークフローを実行。",
        en: "Adjust your prompt and image size, then run the workflow on your PC.",
      },
    },
    {
      file: "iphone-03-result",
      title: {
        ja: "できた一枚を、その先へ。",
        en: "An image. A new beginning.",
      },
      text: {
        ja: "写真に保存、共有、次の入力へ。結果を次のひらめきにつなげます。",
        en: "Save to Photos, share, or use as input. Keep your creative flow moving.",
      },
    },
    {
      file: "iphone-04-server-outputs",
      title: {
        ja: "PCの出力が、手元に並ぶ。",
        en: "Your output folder, in hand.",
      },
      text: {
        ja: "サーバーの出力を一覧で確認。見たい画像を、すぐに。",
        en: "Browse your server’s outputs and find the image you want.",
      },
    },
    {
      file: "iphone-05-use-as-input",
      title: {
        ja: "次のワークフローへ、直接。",
        en: "Straight into the next workflow.",
      },
      text: {
        ja: "生成結果を入力に設定。そのまま、もう一度つくりはじめられます。",
        en: "Set a result as your input and start creating again.",
      },
    },
  ],
  ipad: [
    {
      file: "ipad-01-server",
      title: {
        ja: "大きな画面で、見渡せる。",
        en: "A little more room to work.",
      },
      text: {
        ja: "iPadでも、いつものサーバーとワークフローを。",
        en: "Your familiar servers and workflows, on iPad.",
      },
    },
    {
      file: "ipad-02-server-outputs",
      title: {
        ja: "たくさんの出力を、ひと目で。",
        en: "More of your output, at once.",
      },
      text: {
        ja: "広い画面を使って、サーバーの画像を探せます。",
        en: "Use the larger screen to browse images on your server.",
      },
    },
    {
      file: "ipad-03-output",
      title: { ja: "画像を、じっくり確かめる。", en: "Take a closer look." },
      text: {
        ja: "出力の詳細を開いて、保存や共有へ。",
        en: "Open an output’s details to save or share it.",
      },
    },
  ],
  duo: [
    {
      file: "duo-01-server",
      title: { ja: "開いた画面にも、自然に。", en: "Open up your workspace." },
      text: {
        ja: "iPhone Duoの横長の画面で、サーバーを操作。",
        en: "Manage your server on the unfolded iPhone Duo display.",
      },
    },
    {
      file: "duo-03-result",
      title: {
        ja: "結果を、大きく楽しむ。",
        en: "Give your results some room.",
      },
      text: {
        ja: "できあがった画像を確認して、保存・共有・次の入力に。",
        en: "View your image, then save, share or use it as input.",
      },
    },
    {
      file: "duo-04-server-outputs",
      title: {
        ja: "出力を、ゆったり並べる。",
        en: "A wider view of your outputs.",
      },
      text: {
        ja: "サーバーの出力画像をグリッドで確認できます。",
        en: "Browse your server’s output images in a spacious grid.",
      },
    },
  ],
  android: [
    {
      file: "android-01-server",
      title: {
        ja: "Androidにも、つくる自由を。",
        en: "Your creative flow, on Android.",
      },
      text: {
        ja: "接続状態、ワークフロー、履歴をひとつの画面に。",
        en: "Connection status, workflows and history in one place.",
      },
    },
    {
      file: "android-02-workflow",
      title: {
        ja: "いつもの入力を、Androidで。",
        en: "Familiar inputs, on Android.",
      },
      text: {
        ja: "スマホからプロンプトや設定を調整して実行。",
        en: "Adjust your prompt and settings, then run from your phone.",
      },
    },
    {
      file: "android-03-result",
      title: {
        ja: "できあがりを、すぐ手元に。",
        en: "The result, right in your hand.",
      },
      text: {
        ja: "生成した画像の保存・共有も、スマホから。",
        en: "Save and share generated images from your phone.",
      },
    },
  ],
};
