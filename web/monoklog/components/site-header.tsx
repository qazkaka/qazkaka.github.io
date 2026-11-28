"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_URL, asset } from "@/lib/content";
const links = [
  { href: "#features", label: "できること" },
  { href: "#screens", label: "アプリの画面" },
  { href: "#plans", label: "無料とPro" },
  { href: "#faq", label: "よくある質問" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="brand" aria-label="ものクログ トップ">
          <img src={asset("icon-512.png")} width="36" height="36" alt="" />
          <span>ものクログ</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild className="download-small">
            <a href={STORE_URL}>
              無料ではじめる
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="モバイルナビゲーション"
        hidden={!open}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
