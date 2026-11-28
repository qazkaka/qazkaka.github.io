import { ArrowDown, ArrowUpRight, Code2, Heart, Sparkles } from "lucide-react";
import { AppCard } from "@/components/app-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Support } from "@/components/support";
import { Button } from "@/components/ui/button";
import { apps } from "@/lib/content";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="qazkaka のアプリ トップ">
            <span className="brand-mark" aria-hidden="true">
              q<span>.</span>
            </span>
            <span>
              qazkaka<span className="brand-sub"> / apps</span>
            </span>
          </a>
          <nav aria-label="メインナビゲーション">
            <a href="#apps">アプリ</a>
            <a href="#support">サポート</a>
            <a
              className="github-link"
              href="https://github.com/qazkaka"
              aria-label="GitHubプロフィール"
            >
              <Code2 size={19} aria-hidden="true" />
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <BlurFade className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span /> INDEPENDENT APP DEVELOPMENT
            </p>
            <h1 id="hero-title">
              日々に、
              <br />
              小さな<span className="accent-word">心地よさ</span>を。
            </h1>
            <p className="hero-description">
              お気に入りを、もっと楽しむ。
              <br />
              つくりたい気持ちを、もっと自由に。
              <br />
              暮らしと創作に寄り添うアプリをつくっています。
            </p>
            <Button asChild className="hero-button">
              <a href="#apps">
                アプリを見てみる
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </Button>
            <div className="hero-footnote">
              <span className="small-line" />
              Designed & developed by qazkaka
            </div>
          </BlurFade>
          <BlurFade delay={0.12} className="hero-art">
            <div className="art-grid" />
            <span className="art-label">
              A LITTLE MORE
              <br />
              DELIGHT, EVERY DAY.
            </span>
            <div className="art-circle" />
            <a
              className="floating-app floating-monoklog"
              href="/monoklog/"
              aria-label="ものクログの紹介を見る"
            >
              <img
                src="/monoklog/images/icon-512.png"
                width={144}
                height={144}
                alt=""
              />
              <span>
                ものクログ
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
            <a
              className="floating-app floating-comfy"
              href="/comfy-pocket/"
              aria-label="Comfy Pocketの紹介を見る"
            >
              <img
                src="/comfy-pocket/images/icon-512.png"
                width={116}
                height={116}
                alt=""
              />
              <span>
                Comfy Pocket
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
            <span className="art-spark">
              <Sparkles size={25} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <span className="art-bottom">
              MADE WITH CARE<span>02 APPS</span>
            </span>
          </BlurFade>
        </section>
        <section
          className="apps-section shell"
          id="apps"
          aria-labelledby="apps-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE APPS</p>
              <h2 id="apps-title">ひとつずつ、こだわりを。</h2>
            </div>
            <p>あなたの毎日に合うアプリを、ここから。</p>
          </div>
          <div className="app-list">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
        <section
          className="support-section shell"
          id="support"
          aria-labelledby="support-title"
        >
          <div className="support-intro">
            <p className="eyebrow">HERE TO HELP</p>
            <h2 id="support-title">
              困ったときも、
              <br />
              すぐそばに。
            </h2>
            <p>
              使い方のヒントや、よくある質問は
              <br />
              各アプリのサポートページへ。
            </p>
          </div>
          <div>
            <Support />
            <noscript>
              <p className="no-js-support">
                <a href="/monoklog/support.html">ものクログのサポート</a>
                <a href="/comfy-pocket/support.html">Comfy Pocketのサポート</a>
              </p>
            </noscript>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a href="#top" className="footer-brand">
          qazkaka<span>.</span>
        </a>
        <p>日々に、小さな心地よさを。</p>
        <span className="copyright">
          © {new Date().getFullYear()} qazkaka
          <span className="footer-heart">
            <Heart size={12} aria-hidden="true" /> Made with care.
          </span>
        </span>
      </footer>
    </>
  );
}
