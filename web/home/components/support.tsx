"use client";
import { ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { apps } from "@/lib/content";
export function Support() {
  return (
    <Accordion type="single" collapsible className="support-accordion">
      {apps.map((app) => (
        <AccordionItem key={app.id} value={app.id}>
          <AccordionTrigger className="support-trigger">
            <span>
              <img src={app.icon} width={32} height={32} alt="" />
              {app.name}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="support-links">
              <a href={app.support}>
                <BookOpen size={17} aria-hidden="true" />
                <span>使い方・お問い合わせ</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={app.privacy}>
                <ShieldCheck size={17} aria-hidden="true" />
                <span>プライバシーポリシー</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
