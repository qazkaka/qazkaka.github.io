import { ArrowUpRight, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { App } from "@/lib/content";
export function AppCard({ app }: { app: App }) {
  return (
    <article
      className={`app-card ${app.id}`}
      aria-labelledby={`${app.id}-title`}
    >
      <div className="app-copy">
        <div className="app-topline">
          <span className="app-category">{app.category}</span>
          <span className="app-number">/{app.number}</span>
        </div>
        <div className="app-identity">
          <img src={app.icon} width={56} height={56} alt="" />
          <div>
            <span className="eyebrow">{app.english}</span>
            <h3 id={`${app.id}-title`}>{app.name}</h3>
          </div>
        </div>
        <p className="app-tagline">
          {app.tagline.split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </p>
        <p className="app-description">{app.description}</p>
        <ul className="platforms" aria-label={`${app.name}の対応端末`}>
          {app.platforms.map((platform) => (
            <li key={platform}>
              {platform === "iPad" ? (
                <Tablet aria-hidden="true" size={13} />
              ) : (
                <Smartphone aria-hidden="true" size={13} />
              )}
              {platform}
            </li>
          ))}
        </ul>
        <Button asChild className="app-button">
          <a href={app.href}>
            {app.name}を詳しく見る
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <p className="app-note">{app.detail}</p>
      </div>
      <a
        className="app-visual"
        href={app.href}
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="visual-orbit orbit-one" />
        <span className="visual-orbit orbit-two" />
        <div className="phone-frame">
          <img
            src={app.screenshot}
            width={402}
            height={874}
            alt={app.screenshotAlt}
            loading="lazy"
          />
        </div>
        <span className="visual-caption">
          {app.english}
          <ArrowUpRight size={15} />
        </span>
      </a>
    </article>
  );
}
