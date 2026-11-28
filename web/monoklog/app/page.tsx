import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Cloud,
  Download,
  Heart,
  Images,
  LockKeyhole,
  Paintbrush,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { ScreenExplorer } from "@/components/screen-explorer";
import { FAQ } from "@/components/faq";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { STORE_URL, asset } from "@/lib/content";
const UsageChart = dynamic(() =>
  import("@/components/usage-chart").then((mod) => mod.UsageChart),
);
function StoreButton({
  label = "App Storeでダウンロード",
}: {
  label?: string;
}) {
  return (
    <Button asChild className="store-button">
      <a href={STORE_URL}>
        <Download size={19} aria-hidden="true" />
        {label}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </Button>
  );
}
const extras = [
  {
    id: "care",
    icon: Wrench,
    title: "お手入れも、忘れずに。",
    text: "修理やクリーニングの履歴、保証書をひとまとめに。次回の予定も記録できます。",
    note: "記録は無料 · お知らせはPro",
  },
  {
    id: "widget",
    icon: Smartphone,
    title: "今日の相棒を、ホーム画面に。",
    text: "しまい込んだお気に入りをウィジェットで発見。Siriやショートカットからも使用を記録。",
    note: "Pro",
  },
  {
    id: "share",
    icon: Images,
    title: "好きが伝わる、一枚に。",
    text: "コレクションや年間まとめを画像で共有。載せる情報や金額の見せ方も選べます。",
    note: "基本の共有は無料 · カスタマイズはPro",
  },
  {
    id: "backup",
    icon: ShieldCheck,
    title: "大切な記録を、これからも。",
    text: "写真ごとバックアップを書き出し・読み込み。ProならiCloud Driveへ自動バックアップ。",
    note: "書き出し・読み込みは無料",
  },
  {
    id: "calendar-feature",
    icon: CalendarDays,
    title: "日々の積み重ねを、ひと目で。",
    text: "発売日、購入日、使った日をカレンダーで。ものと過ごした日々がつながっていきます。",
    note: "Pro",
  },
  {
    id: "theme",
    icon: Paintbrush,
    title: "自分にしっくりくる、色で。",
    text: "背景、カード、文字、アクセント。いつも開く場所だから、好きな配色に整えられます。",
    note: "Pro",
  },
];
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        本文へスキップ
      </a>
      <SiteHeader />
      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="tiny-dot" />
                持ち物と、使った日の記録帳
              </div>
              <h1 id="hero-title" className="serif">
                好きなものと、
                <br />
                長く、<span className="hero-accent">いい関係</span>を。
              </h1>
              <p className="hero-description">
                集める楽しさも、使い込むよろこびも。
                <br />
                持ち物との毎日を、写真と記録で。
              </p>
              <StoreButton />
              <p className="hero-note">
                iPhone・iPad / iOS 17以降 · 基本機能は無料
              </p>
              <a href="#screens" className="hero-more">
                <span className="round-arrow">
                  <ArrowDown size={16} aria-hidden="true" />
                </span>
                アプリをのぞいてみる
              </a>
            </div>
            <BlurFade className="hero-art" delay={0.1} offset={12}>
              <div className="hero-orbit" aria-hidden="true" />
              <span className="hero-art-word" aria-hidden="true">
                My little
                <br />
                collection.
              </span>
              <div className="device hero-device">
                <img
                  src={asset("screens/iphone-01-collection.jpg")}
                  width="640"
                  height="1390"
                  alt="ものクログのコレクション画面。写真付きの持ち物と今日のおすすめを表示"
                  fetchPriority="high"
                />
              </div>
              <div className="floating-note">
                <span className="note-icon">
                  <Heart size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="note-eyebrow">今日も、お気に入りと。</span>
                  <strong>使うたび、愛着になる。</strong>
                </div>
              </div>
              <div className="mini-photo">
                <img
                  src={asset("screens/iphone-05-timeline.jpg")}
                  width="640"
                  height="1390"
                  alt=""
                />
                <span>日々の記録も、一緒に。</span>
              </div>
              <span className="hero-art-caption">COLLECT. USE. REMEMBER.</span>
            </BlurFade>
          </div>
        </section>
        <div className="trust-strip">
          <div className="shell trust-inner">
            <span>
              <LockKeyhole size={17} aria-hidden="true" />
              アカウント登録不要
            </span>
            <span>
              <Cloud size={18} aria-hidden="true" />
              自分のiCloudで同期
            </span>
            <span>
              <Heart size={17} aria-hidden="true" />
              まずは10件、無料で
            </span>
          </div>
        </div>
        <section
          id="features"
          className="section intro"
          aria-labelledby="intro-title"
        >
          <div className="shell">
            <div className="section-top">
              <span className="section-label">01 — ABOUT MONOKLOG</span>
              <span className="section-aside">
                ものを持つ。その先を楽しむ。
              </span>
            </div>
            <div className="intro-grid">
              <h2 id="intro-title" className="serif">
                持っているものを、
                <br />
                もっと<span className="underline-accent">好きになる。</span>
              </h2>
              <div className="intro-copy">
                <p>
                  何を持っていて、どれくらい使っているだろう。
                  <br />
                  ものクログは、そんな小さな気づきのためのアプリです。
                </p>
                <p>
                  持ち物、欲しい物、手放した物。
                  <br />
                  ものとの出会いから、使った日の思い出まで。
                  <br />
                  あなただけのコレクションを育てていきましょう。
                </p>
              </div>
            </div>
            <div className="steps">
              <div>
                <span className="step-number">01</span>
                <BookOpen aria-hidden="true" />
                <h3>写真で、集める。</h3>
                <p>
                  お気に入りを一つずつ。
                  <br />
                  写真とメモで、自分だけの一覧に。
                </p>
              </div>
              <ChevronRight className="step-chevron" aria-hidden="true" />
              <div>
                <span className="step-number">02</span>
                <Check aria-hidden="true" />
                <h3>使った日を、残す。</h3>
                <p>
                  タップするだけで使用を記録。
                  <br />
                  写真やひとことを添えても。
                </p>
              </div>
              <ChevronRight className="step-chevron" aria-hidden="true" />
              <div>
                <span className="step-number">03</span>
                <Heart aria-hidden="true" />
                <h3>愛着を、育てる。</h3>
                <p>
                  よく使うもの、久しぶりのもの。
                  <br />
                  記録から、新しい気づきが生まれる。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="screens"
          className="section screens-section"
          aria-labelledby="screens-title"
        >
          <div className="shell">
            <div className="section-top">
              <span className="section-label">02 — A CLOSER LOOK</span>
              <span className="section-aside">
                日々になじむ、シンプルな使い心地。
              </span>
            </div>
            <div className="section-heading">
              <h2 id="screens-title" className="serif">
                あなたの「好き」を、
                <br className="mobile-break" />
                ひとつの場所に。
              </h2>
              <p>気になる機能を選んで、実際の画面をのぞいてみてください。</p>
            </div>
            <ScreenExplorer />
          </div>
        </section>
        <section
          id="usage"
          className="section usage-section"
          aria-labelledby="usage-title"
        >
          <div className="shell usage-grid">
            <div>
              <span className="section-label">RECORDS BECOME INSIGHTS</span>
              <h2 id="usage-title" className="serif">
                「買ってよかった」が、
                <br />
                見えてくる。
              </h2>
              <p className="body-copy">
                よく使うものも、少し眠っているものも。
                <br />
                使用回数や1回あたりの金額を振り返れば、
                <br />
                これからの買い物のヒントになります。
              </p>
              <span className="feature-badge">詳しい統計・使用分析はPro</span>
              <div className="usage-detail">
                <Sparkles size={19} aria-hidden="true" />
                <p>
                  週・月・年で振り返る。
                  <br />
                  <span>右のサンプルは「週」「月」を切り替えられます。</span>
                </p>
              </div>
            </div>
            <UsageChart />
          </div>
        </section>
        <section
          id="groups"
          className="section groups-section"
          aria-labelledby="groups-title"
        >
          <div className="shell groups-grid">
            <div className="groups-visual">
              <div className="device group-device">
                <img
                  src={asset("screens/iphone-09-groups.jpg")}
                  width="640"
                  height="1390"
                  alt="家族のグループで写真付きの持ち物や使用記録を共有するタイムライン"
                  loading="lazy"
                />
              </div>
              <span className="group-circle" aria-hidden="true">
                <Users size={30} />
              </span>
              <span className="group-note">「それ、いいね。」が広がる。</span>
            </div>
            <div className="groups-copy">
              <span className="section-label">BETTER TOGETHER</span>
              <div>
                <span className="feature-badge">グループ · ベータ版</span>
              </div>
              <h2 id="groups-title" className="serif">
                好きなものの話を、
                <br />
                好きな人たちと。
              </h2>
              <p className="body-copy">
                家族や友だちと、招待制の小さなグループを。
                <br />
                新しく迎えたものも、今日使ったものも。
                <br />
                写真を見せ合えば、会話がはずみます。
              </p>
              <ul className="check-list">
                <li>
                  <Check size={17} aria-hidden="true" />
                  招待されたグループへの参加は無料
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  グループの作成はPro（10人まで）
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  リーダーの承認制・通報とブロックに対応
                </li>
              </ul>
              <a href="/monoklog/support.html#faq-group" className="text-link">
                グループについて詳しく
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="small-note">
                バージョン1.5から利用できます。ベータ版のため、機能や画面が変わることがあります。
              </p>
            </div>
          </div>
        </section>
        <section
          id="sync"
          className="section sync-section"
          aria-labelledby="sync-title"
        >
          <div className="shell">
            <div className="sync-heading">
              <div>
                <span className="section-label">AT HOME. ON THE GO.</span>
                <h2 id="sync-title" className="serif">
                  外ではiPhone。
                  <br />
                  家では、iPadでゆっくり。
                </h2>
              </div>
              <p className="body-copy">
                同じApple Accountなら、写真も記録も自動で同期。
                <br />
                自分のiCloudで、大切なコレクションがつながります。
                <br />
                <span className="feature-badge">iCloud同期は無料</span>
              </p>
            </div>
            <div className="ipad-frame">
              <img
                src={asset("screens/ipad-01-split-collection.jpg")}
                width="1376"
                height="1032"
                alt="iPadの大きな画面でコレクション一覧と持ち物の詳細を左右に並べて表示"
                loading="lazy"
              />
            </div>
            <p className="ipad-caption">
              一覧と詳細を並べて。お気に入りを、心ゆくまで。
            </p>
          </div>
        </section>
        <section
          className="section extras-section"
          aria-labelledby="extras-title"
        >
          <div className="shell">
            <div className="section-top">
              <span className="section-label">03 — THE LITTLE DETAILS</span>
            </div>
            <div className="section-heading">
              <h2 id="extras-title" className="serif">
                小さなところまで、
                <br className="mobile-break" />
                心地よく。
              </h2>
            </div>
            <div className="extras-grid">
              {extras.map((item) => (
                <article key={item.id} id={item.id} className="extra-item">
                  <item.icon size={25} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="plans"
          className="section plans-section"
          aria-labelledby="pro-title"
        >
          <div className="shell">
            <div className="section-top">
              <span className="section-label">04 — FIND YOUR PLAN</span>
            </div>
            <div className="section-heading">
              <h2 id="pro-title" className="serif">
                まずは無料で。
                <br />
                もっと楽しむなら、Pro。
              </h2>
              <p>自分のペースで始めて、コレクションに合わせて選べます。</p>
            </div>
            <div className="plans-grid">
              <article className="plan-card">
                <span className="plan-eyebrow">はじめの一歩に</span>
                <h3>ものクログ</h3>
                <div className="plan-price">
                  無料<span>まずは10件から</span>
                </div>
                <p>持ち物を記録する、基本の機能を。</p>
                <ul className="check-list">
                  {[
                    "持ち物・欲しい物・手放した物を合計10件",
                    "1点につき写真6枚・使用記録・タイムライン",
                    "お手入れと保証の記録",
                    "検索・絞り込み・並べ替え",
                    "iPhone・iPadのiCloud同期",
                    "招待されたグループへの参加（ベータ版）",
                    "商品カードの画像共有",
                    "バックアップの書き出し・読み込み",
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <StoreButton label="無料で使ってみる" />
              </article>
              <article className="plan-card plan-pro">
                <span className="plan-eyebrow">お気に入りが増えたら</span>
                <h3>
                  ものクログ <span className="pro-label">Pro</span>
                </h3>
                <div className="plan-price">
                  買い切り<span>一度の購入で、ずっと。</span>
                </div>
                <p>無料版のすべてに、さらに。</p>
                <ul className="check-list">
                  {[
                    "登録数の上限なし・広告なし",
                    "詳しい使用分析と週・月・年の統計",
                    "カレンダー・カテゴリやブランド別の統計",
                    "ウィジェット・Siri・ショートカット",
                    "お手入れ・保証期限のお知らせ",
                    "グループの作成（10人まで・ベータ版）",
                    "共有画像と配色のカスタマイズ",
                    "絞り込みの保存・iCloud自動バックアップ",
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="store-button pro-button">
                  <a href={STORE_URL}>
                    App Storeで詳しく見る
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </Button>
                <p className="plan-footnote">
                  価格はApp Storeでご確認ください。アプリ内で購入できます。
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="section faq-section"
          aria-labelledby="faq-title"
        >
          <div className="shell faq-grid">
            <div>
              <span className="section-label">05 — QUESTIONS & ANSWERS</span>
              <h2 id="faq-title" className="serif">
                気になること。
              </h2>
              <p className="body-copy">使い始める前の疑問をまとめました。</p>
              <a href="/monoklog/support.html" className="text-link">
                サポート・お問い合わせ
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <FAQ />
          </div>
        </section>
        <section className="closing" aria-labelledby="closing-title">
          <div className="shell">
            <img
              className="closing-icon"
              src={asset("icon-512.png")}
              width="64"
              height="64"
              alt=""
              loading="lazy"
            />
            <span className="section-label">YOUR THINGS. YOUR STORIES.</span>
            <h2 id="closing-title" className="serif">
              お気に入りとの毎日に、
              <br />
              小さな記録を。
            </h2>
            <p>まずは、いちばん好きなものから。</p>
            <StoreButton />
            <p className="hero-note">アカウント登録不要 · 基本機能は無料</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell footer-top">
          <a href="#top" className="brand">
            <img src={asset("icon-512.png")} width="30" height="30" alt="" />
            <span>ものクログ</span>
          </a>
          <nav aria-label="フッターナビゲーション">
            <a href="/monoklog/support.html">サポート</a>
            <a href="/monoklog/PrivacyPolicy.html">プライバシーポリシー</a>
            <a href="/">
              ほかのアプリ
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <span>持ち物と、使った日の記録帳。</span>
          <span>© ものクログ</span>
        </div>
      </footer>
    </>
  );
}
