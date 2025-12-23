
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import database from '../data/database.json';

export default function FAQs() {
  const information = database.information;
  const faqs = database.faqs;
 
    return(
      <section id="FAQs" className="min-h-full bg-zinc-950 px-5 py-12">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-amber-500/80 text-xs tracking-[0.3em] uppercase mb-2">Questions?</p>
          <h2 className="text-2xl text-zinc-100" style={{ fontFamily: 'Merriweather Variable, serif' }}>FAQs</h2>
        </div>

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="space-y-3">
          {
            faqs.map(({ question, answer }, i) => (
              <AccordionItem value={`item-${i}` } key={i} className="last:border-b data-[state=open]:bg-zinc-900/80 data-[state=open]:border-amber-500/30 bg-zinc-900/30 border-zinc-800 rounded-xl border overflow-hidden px-4 py-1">
                <AccordionTrigger className="data-[state=open]:text-zinc-100 data-[state=open]:[&>svg]:text-amber-500/80 text-sm font-medium text-zinc-300 [&>svg]:text-zinc-500">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed">{answer}</AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-8 p-5 rounded-2xl bg-linear-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 text-center">
          <p className="text-zinc-300 text-sm mb-3">Still have questions?</p>
            <a className="bg-amber-500 text-black font-medium px-6 py-2.5 rounded-lg text-sm" href={`sms:${information.phone}`}>
              Send us a Text
            </a>
        </div>
      </section>
    )
};