"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
export function FAQ() {
  return (
    <Accordion type="single" collapsible className="faq-list">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${i}`}
          className="faq-item"
        >
          <AccordionTrigger className="faq-trigger">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="faq-answer">
            <p>{faq.answer}</p>
            {faq.link && (
              <a href={`/monoklog/${faq.link}`} className="text-link">
                {faq.linkText} ↗
              </a>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
