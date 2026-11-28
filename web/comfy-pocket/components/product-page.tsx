import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CircleDot,
  FolderOpen,
  ImagePlus,
  Laptop,
  LockKeyhole,
  Monitor,
  Repeat2,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Wifi,
} from "lucide-react";
import { asset, copy, sitePath, type Locale } from "@/lib/content";
import { SiteHeader } from "./site-header";
import { ScreenExplorer } from "./screen-explorer";
import { FAQ } from "./faq";
import { Button } from "./ui/button";
import { BlurFade } from "./magicui/blur-fade";
const featureIcons = {
  image: ImagePlus,
  repeat: Repeat2,
  folder: FolderOpen,
  bell: Bell,
  server: Server,
  sliders: SlidersHorizontal,
};
export function ProductPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <SiteHeader locale={locale} />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="availability">
              <span aria-hidden="true" />
              {t.badge}
            </p>
            <p className="eyebrow hero-eyebrow">{t.eyebrow}</p>
            <h1 id="hero-heading">
              {t.heading[0]}
              <br />
              <span>{t.heading[1]}</span>
            </h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-buttons">
              <Button asChild size="lg" className="primary-button">
                <a href="#screens">
                  {t.primary}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a className="subtle-link" href="#get-started">
                {t.secondary}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-platforms">
              <Smartphone size={15} aria-hidden="true" />
              iOS 17+ <span>·</span> iPadOS 17+ <span>·</span> Android 10+
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-orbit orbit-one" aria-hidden="true" />
            <div className="hero-orbit orbit-two" aria-hidden="true" />
            <div className="hero-phone phone-back">
              <img
                src={asset(`screens/${locale}/iphone-02-workflow.jpg`)}
                width="552"
                height="1200"
                alt={
                  locale === "ja"
                    ? "プロンプトを入力するワークフロー画面"
                    : "The workflow input screen"
                }
                fetchPriority="high"
              />
            </div>
            <div className="hero-phone phone-front">
              <img
                src={asset(`screens/${locale}/iphone-03-result.jpg`)}
                width="552"
                height="1200"
                alt={
                  locale === "ja"
                    ? "生成した画像を保存・共有・次の入力に使える結果画面"
                    : "The result screen with save, share and use-as-input actions"
                }
                fetchPriority="high"
              />
            </div>
            <div className="floating-label connection-label">
              <span className="status-dot" aria-hidden="true" />
              <span>{t.connected}</span>
              <Wifi size={15} aria-hidden="true" />
            </div>
            <div className="floating-label output-label">
              <span className="label-icon">
                <Repeat2 size={18} aria-hidden="true" />
              </span>
              <span>
                {t.run}
                <small>COMFY POCKET</small>
              </span>
            </div>
            <p className="visual-caption">{t.heroCaption}</p>
          </div>
        </section>
        <div className="facts-strip">
          <div className="container facts-inner">
            {t.facts.map((fact, i) => {
              const Icon = [Smartphone, Monitor, ShieldCheck][i];
              return (
                <span key={fact}>
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  {fact}
                </span>
              );
            })}
          </div>
        </div>
        <section
          className="section container workflow-section"
          aria-labelledby="workflow-heading"
        >
          <BlurFade className="workflow-visual" inView>
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>YOUR CREATIVE SPACE</span>
            </div>
            <img
              src={asset(`screens/${locale}/ipad-02-server-outputs.jpg`)}
              alt={
                locale === "ja"
                  ? "iPadでサーバーの出力画像を一覧表示する画面"
                  : "The server’s image outputs displayed on iPad"
              }
              width="1200"
              height="900"
              loading="lazy"
            />
            <div className="workflow-caption">
              <CircleDot size={16} aria-hidden="true" />
              {t.flowCaption}
            </div>
          </BlurFade>
          <div className="workflow-copy">
            <p className="eyebrow">{t.flowEyebrow}</p>
            <h2 id="workflow-heading">{t.flowTitle}</h2>
            <p className="section-lead">{t.flowLead}</p>
            <ol className="workflow-steps">
              {t.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-number">0{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          id="screens"
          className="section screens-section"
          aria-labelledby="screens-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t.screensEyebrow}</p>
                <h2 id="screens-heading">{t.screensTitle}</h2>
              </div>
              <p className="section-lead">{t.screensLead}</p>
            </div>
            <ScreenExplorer locale={locale} />
            <p className="demo-note">
              <CircleDot size={14} aria-hidden="true" />
              {t.demoNote}
            </p>
          </div>
        </section>
        <section
          id="features"
          className="section container features-section"
          aria-labelledby="features-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.featuresEyebrow}</p>
              <h2 id="features-heading">{t.featuresTitle}</h2>
            </div>
            <Sparkles
              size={30}
              className="section-mark"
              strokeWidth={1.25}
              aria-hidden="true"
            />
          </div>
          <div className="features-grid">
            {t.features.map((feature, i) => {
              const Icon = featureIcons[feature.icon];
              return (
                <BlurFade
                  key={feature.title}
                  inView
                  delay={(i % 3) * 0.035}
                  className="feature"
                >
                  <div className="feature-top">
                    <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </BlurFade>
              );
            })}
          </div>
        </section>
        <section className="privacy-section" aria-labelledby="privacy-heading">
          <div className="container privacy-inner">
            <div className="privacy-copy">
              <p className="eyebrow">
                <LockKeyhole size={14} aria-hidden="true" />
                {t.privacyEyebrow}
              </p>
              <h2 id="privacy-heading">{t.privacyTitle}</h2>
              <p>{t.privacyText}</p>
              <a
                className="text-link"
                href={`${sitePath(locale)}PrivacyPolicy.html`}
              >
                {t.privacyLink}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div
              className="connection-diagram"
              role="img"
              aria-label={`${t.phone} → ${t.direct} → ${t.server}`}
            >
              <div className="diagram-end">
                <span className="diagram-device">
                  <Smartphone size={39} strokeWidth={1.2} aria-hidden="true" />
                </span>
                <span>{t.phone}</span>
              </div>
              <div className="diagram-line">
                <span>
                  <ShieldCheck size={15} aria-hidden="true" />
                  {t.direct}
                </span>
                <i />
                <ArrowRight size={17} aria-hidden="true" />
              </div>
              <div className="diagram-end">
                <span className="diagram-device">
                  <Server size={39} strokeWidth={1.2} aria-hidden="true" />
                </span>
                <span>{t.server}</span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-started"
          className="section container start-section"
          aria-labelledby="start-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.startEyebrow}</p>
              <h2 id="start-heading">{t.startTitle}</h2>
            </div>
            <p className="section-lead">{t.startText}</p>
          </div>
          <div className="requirements-grid">
            {t.requirements.map((requirement, i) => {
              const Icon = [Laptop, Wifi, Smartphone][i];
              return (
                <div className="requirement" key={requirement.title}>
                  <span className="requirement-icon">
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{requirement.title}</h3>
                  <p>{requirement.text}</p>
                </div>
              );
            })}
          </div>
          <a href={`${sitePath(locale)}support.html`} className="text-link">
            {t.guide}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>
        <section
          className="section container faq-section"
          aria-labelledby="faq-heading"
        >
          <div>
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2 id="faq-heading">{t.faqTitle}</h2>
          </div>
          <div>
            <FAQ locale={locale} />
          </div>
        </section>
        <section
          className="container soon-section"
          aria-labelledby="soon-heading"
        >
          <img
            src={asset("icon-512.png")}
            alt=""
            width="64"
            height="64"
            loading="lazy"
          />
          <h2 id="soon-heading">{t.soonTitle}</h2>
          <p>{t.soonText}</p>
          <div className="store-labels">
            <span>
              <Smartphone size={18} aria-hidden="true" />
              App Store<small>COMING SOON</small>
            </span>
            <span>
              <Monitor size={18} aria-hidden="true" />
              Google Play<small>COMING SOON</small>
            </span>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <div className="footer-top">
          <a href={sitePath(locale)} className="brand">
            <img src={asset("icon-512.png")} width="28" height="28" alt="" />
            <span>Comfy Pocket</span>
          </a>
          <nav aria-label={locale === "ja" ? "フッター" : "Footer"}>
            <a href={`${sitePath(locale)}support.html`}>{t.support}</a>
            <a href={`${sitePath(locale)}PrivacyPolicy.html`}>{t.privacy}</a>
            <a href="/">
              {t.allApps}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{t.unofficial}</p>
          <span>© {new Date().getFullYear()} qazkaka</span>
        </div>
      </footer>
    </>
  );
}
