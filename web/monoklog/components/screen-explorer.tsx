"use client";
import { ArrowUpRight, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { screens, asset } from "@/lib/content";
export function ScreenExplorer() {
  return (
    <Tabs defaultValue="collection" className="screen-explorer">
      <div className="screen-tabs-scroll">
        <TabsList className="screen-tabs" aria-label="紹介するアプリの画面">
          {screens.map((screen) => (
            <TabsTrigger
              className="screen-tab"
              key={screen.id}
              value={screen.id}
            >
              {screen.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {screens.map((screen) => (
        <TabsContent
          className="screen-content"
          key={screen.id}
          value={screen.id}
        >
          <div className="screen-copy">
            <span className="index-label">
              {screen.number} / YOUR EVERYDAY COLLECTION
            </span>
            <span className="feature-badge">{screen.plan}</span>
            <h3 className="serif">{screen.title}</h3>
            <p>{screen.description}</p>
            <ul className="check-list">
              {screen.points.map((point) => (
                <li key={point}>
                  <Check size={17} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <a className="text-link" href="/monoklog/support.html">
              使い方を詳しく見る
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="screen-visual">
            <span className="visual-word" aria-hidden="true">
              {screen.id === "collection"
                ? "Collect."
                : screen.id === "timeline"
                  ? "Remember."
                  : "Enjoy."}
            </span>
            <div className="device explorer-device">
              <img
                src={asset(`screens/${screen.image}`)}
                width="640"
                height="1390"
                alt={screen.alt}
                loading="lazy"
              />
            </div>
            <span className="screen-caption">実際のアプリ画面</span>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
