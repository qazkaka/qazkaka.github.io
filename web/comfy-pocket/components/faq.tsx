"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { copy, sitePath, type Locale } from "@/lib/content";
export function FAQ({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <Accordion type="single" collapsible className="faq-list">
        {t.faq.map((item, i) => (
          <AccordionItem
            value={`faq-${i}`}
            key={item.question}
            className="faq-item"
          >
            <AccordionTrigger className="faq-question">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <noscript>
        <dl>
          {t.faq.map((item) => (
            <div key={item.question}>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </noscript>
      <a className="text-link" href={`${sitePath(locale)}support.html`}>
        {t.support} <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
