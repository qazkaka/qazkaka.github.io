export const STORE_URL = "https://apps.apple.com/jp/app/id6833710021";
export const asset = (name: string) => `/monoklog/images/${name}`;
export const screens = [
  {
    id: "collection",
    label: "持ち物",
    number: "01",
    title: "好きなものが、\n並ぶよろこび。",
    description:
      "スニーカーも、時計も、カメラも。写真やメモを添えて、自分だけのコレクションに。眺めるたびに、また使いたくなります。",
    image: "iphone-01-collection.jpg",
    alt: "写真付きの持ち物と今日のおすすめが並ぶコレクション一覧",
    plan: "無料",
    points: [
      "1点につき写真を6枚まで登録",
      "カテゴリ・ブランド・シリーズで整理",
      "検索・絞り込み・並べ替えですぐ見つかる",
    ],
  },
  {
    id: "timeline",
    label: "使った記録",
    number: "02",
    title: "使った日が、\n思い出になる。",
    description:
      "旅に連れていったカメラ。いつもより歩いたスニーカー。使った日に写真とひとことを残して、ものと過ごした時間を振り返れます。",
    image: "iphone-05-timeline.jpg",
    alt: "使った日の写真とコメントが並ぶタイムライン",
    plan: "無料",
    points: [
      "タップするだけで使用回数を記録",
      "写真とコメントを添えた使用ログ",
      "カレンダーで日々を振り返る（Pro）",
    ],
  },
  {
    id: "wishlist",
    label: "欲しい物",
    number: "03",
    title: "次に迎えたいものも、\n大切に選ぶ。",
    description:
      "気になるものは、まず欲しい物リストへ。目安価格や優先度を整理して、自分にとって納得できる買い物を。",
    image: "iphone-07-wishlist.jpg",
    alt: "写真と目安価格を一覧にした欲しい物リスト",
    plan: "無料",
    points: [
      "優先度・目安価格・発売日をメモ",
      "発売日のお知らせを設定",
      "手に入れたら持ち物へそのまま移動",
    ],
  },
  {
    id: "detail",
    label: "お手入れ",
    number: "04",
    title: "長く使うための、\n小さな記録。",
    description:
      "クリーニングや修理、電池交換。手をかけた記録と保証書を、持ち物ごとにひとまとめにできます。",
    image: "iphone-04-detail.jpg",
    alt: "お手入れ履歴と保証書をまとめた持ち物の詳細画面",
    plan: "記録は無料",
    points: [
      "日付・費用・メモ・写真を記録",
      "次回の予定日や保証期限も管理",
      "期限が近づいたらお知らせ（Pro）",
    ],
  },
  {
    id: "calendar",
    label: "カレンダー",
    number: "05",
    title: "ものとの毎日を、\nひと月の景色に。",
    description:
      "使った日も、買った日も。カレンダーを開けば、その月にどんなものと過ごしたかが分かります。",
    image: "iphone-06-calendar.jpg",
    alt: "発売日・購入日・使用日を確認できるカレンダー",
    plan: "Pro",
    points: [
      "発売日・購入日・使った日をまとめて確認",
      "月ごとの記録を振り返る",
      "詳しい使用分析もProで",
    ],
  },
  {
    id: "sharing",
    label: "画像で共有",
    number: "06",
    title: "お気に入りを、\n自分らしい一枚に。",
    description:
      "写真と情報をカードにまとめて、SNSへ。プレビューを見ながら、載せる情報をその場で調整できます。",
    image: "iphone-08-share.jpg",
    alt: "年間まとめの画像プレビューと共有設定",
    plan: "基本の共有は無料",
    points: [
      "商品カード・使い込みカード・年間まとめ",
      "金額を載せない、価格帯だけの表示も",
      "デザインや写真をカスタマイズ（Pro）",
    ],
  },
  {
    id: "statistics",
    label: "使用回数",
    number: "07",
    title: "よく使うものに、\n気づける。",
    description:
      "週・月・年の使用回数をグラフで確認。前の期間やランキングを見ながら、持ち物との付き合い方を見つめ直せます。",
    image: "iphone-02-usage.jpg",
    alt: "使用回数の棒グラフとよく使った物のランキング",
    plan: "Pro",
    points: [
      "週・月・年ごとの使用回数",
      "前の期間との比較やランキング",
      "1回あたりの金額も確認",
    ],
  },
  {
    id: "widgets",
    label: "ウィジェット",
    number: "08",
    title: "今日は、\nこれを使おう。",
    description:
      "しばらく使っていないものを、ホーム画面でお知らせ。忘れかけていたお気に入りと、また出かけたくなります。",
    image: "iphone-03-widget.jpg",
    alt: "今日のおすすめを表示するホーム画面ウィジェット",
    plan: "Pro",
    points: [
      "小・中の2サイズから選べる",
      "タップして持ち物の詳細へ",
      "Siri・ショートカットから使用を記録",
    ],
  },
] as const;
export const faqs = [
  {
    question: "無料でどこまで使えますか？",
    answer:
      "持ち物・欲しい物・手放した物を合計10件まで登録できます。写真や使用記録、お手入れ・保証の記録、iCloud同期、基本の画像共有も利用できます。",
  },
  {
    question: "アカウント登録は必要ですか？",
    answer:
      "必要ありません。インストールしてすぐに使えます。iCloud同期やグループ機能を使う場合は、端末でApple Accountへのサインインが必要です。",
  },
  {
    question: "データはどこに保存されますか？",
    answer:
      "お使いの端末と、iCloud同期がオンの場合はご自身のiCloudに保存されます。開発者が記録の内容を見ることはありません。iCloud同期はアプリの設定からオフにできます。",
  },
  {
    question: "機種変更をしても引き継げますか？",
    answer:
      "同じApple Accountで新しい端末にサインインし、iCloud同期をオンにすると引き継げます。バックアップファイルを書き出して、新しい端末に読み込む方法もあります。",
    link: "support.html",
    linkText: "引き継ぎの手順を見る",
  },
  {
    question: "Proは月額ですか？",
    answer:
      "Proは一度の購入で使える買い切りです。価格はApp Storeでご確認ください。同じApple Accountの端末では「購入を復元」で利用できます。",
  },
  {
    question: "グループの投稿は誰が見られますか？",
    answer:
      "招待され、リーダーに承認されたメンバーだけが見られます。投稿は書いた人自身のiCloudに保存されます。Apple Accountの名前やメールアドレスはメンバーに伝わりません。バージョン1.5からのベータ版です。",
    link: "support.html#faq-group",
    linkText: "グループ機能について",
  },
];
