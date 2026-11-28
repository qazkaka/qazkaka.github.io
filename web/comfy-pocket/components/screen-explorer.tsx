"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import {
  asset,
  copy,
  deviceNames,
  devices,
  screens,
  type Device,
  type Locale,
} from "@/lib/content";
export function ScreenExplorer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [device, setDevice] = useState<Device>("iphone");
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      value={device}
      onValueChange={(value) => {
        setDevice(value as Device);
        setSelected(0);
      }}
      className="screen-explorer"
    >
      <TabsList aria-label={t.deviceLabel} className="device-tabs">
        {devices.map((id) => (
          <TabsTrigger key={id} value={id} className="device-tab">
            {deviceNames[id]}
          </TabsTrigger>
        ))}
      </TabsList>
      {devices.map((id) => (
        <TabsContent key={id} value={id} className="explorer-panel">
          <div className="explorer-copy">
            <span className="eyebrow">
              {deviceNames[id]} <span className="soft-slash">/</span>{" "}
              {String(Math.min(selected, screens[id].length - 1) + 1).padStart(
                2,
                "0",
              )}
            </span>
            <div aria-live="polite" aria-atomic="true">
              <h3>
                {
                  screens[id][Math.min(selected, screens[id].length - 1)].title[
                    locale
                  ]
                }
              </h3>
              <p>
                {
                  screens[id][Math.min(selected, screens[id].length - 1)].text[
                    locale
                  ]
                }
              </p>
            </div>
            <div
              className="screen-selector"
              role="group"
              aria-label={t.screenLabel}
            >
              {screens[id].map((screen, index) => (
                <button
                  key={screen.file}
                  type="button"
                  className="screen-choice"
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{screen.title[locale]}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="explorer-controls">
              <Button
                variant="outline"
                size="icon"
                aria-label={t.previous}
                onClick={() =>
                  setSelected(
                    (selected - 1 + screens[id].length) % screens[id].length,
                  )
                }
              >
                <ChevronLeft />
              </Button>
              <span aria-hidden="true">
                {selected + 1} <span className="soft-slash">/</span>{" "}
                {screens[id].length}
              </span>
              <Button
                variant="outline"
                size="icon"
                aria-label={t.next}
                onClick={() => setSelected((selected + 1) % screens[id].length)}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className={`explorer-stage stage-${id}`}>
            <div className="stage-orbit" aria-hidden="true" />
            <img
              className="explorer-screenshot"
              src={asset(
                `screens/${locale}/${screens[id][Math.min(selected, screens[id].length - 1)].file}.jpg`,
              )}
              alt={`${deviceNames[id]} — ${screens[id][Math.min(selected, screens[id].length - 1)].title[locale]}`}
              loading="lazy"
              width={id === "ipad" || id === "duo" ? 900 : 552}
              height={id === "ipad" || id === "duo" ? 650 : 1200}
            />
          </div>
        </TabsContent>
      ))}
      <noscript>
        <p>
          {locale === "ja"
            ? "全端末の画面を見る："
            : "Browse screenshots for every device: "}
          {devices.map((id) => (
            <a
              className="noscript-link"
              key={id}
              href={asset(`screens/${locale}/${screens[id][0].file}.jpg`)}
            >
              {deviceNames[id]}
            </a>
          ))}
        </p>
      </noscript>
    </Tabs>
  );
}
