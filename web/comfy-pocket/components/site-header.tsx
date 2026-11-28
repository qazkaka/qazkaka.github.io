"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { asset, copy, sitePath, type Locale } from "@/lib/content";
import { Button } from "./ui/button";
export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  const other = locale === "ja" ? "en" : "ja";
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={sitePath(locale)} aria-label="Comfy Pocket">
          <img src={asset("icon-512.png")} width="36" height="36" alt="" />
          <span>Comfy Pocket</span>
        </a>
        <nav
          className="desktop-nav"
          aria-label={
            locale === "ja" ? "メインナビゲーション" : "Main navigation"
          }
        >
          {["features", "screens", "get-started"].map((id, i) => (
            <a key={id} href={`#${id}`}>
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={t.language}>
            <a href={sitePath(other)} lang={other} hrefLang={other}>
              {other === "ja" ? "日本語" : "EN"}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
          <Button
            ref={toggle}
            className="menu-toggle"
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t.close : t.menu}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label={
          locale === "ja" ? "モバイルナビゲーション" : "Mobile navigation"
        }
        hidden={!open}
      >
        {["features", "screens", "get-started"].map((id, i) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {t.nav[i]}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
