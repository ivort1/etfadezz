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

  return (
    <section id="FAQs" className="min-h-full bg-slate-50 px-5 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <p className="text-slate-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2">Questions?</p>
        <h2 className="text-2xl text-slate-900" style={{ fontFamily: 'Merriweather Variable, serif' }}>FAQs</h2>
      </div>

      {/* FAQ Items */}
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ question, answer }, i) => (
          <AccordionItem 
            value={`item-${i}`} 
            key={i} 
            className="bg-white border border-slate-200 rounded-xl overflow-hidden px-4 py-1 data-[state=open]:bg-blue-50 data-[state=open]:border-blue-200 last:border-b"
          >
            <AccordionTrigger className="text-sm font-medium text-slate-700 data-[state=open]:text-blue-600 [&>svg]:text-slate-400 data-[state=open]:[&>svg]:text-blue-600">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 text-sm leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact CTA */}
      <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 text-center">
        <p className="text-slate-600 text-sm mb-3">Still have questions?</p>
        <a 
          href={`sms:${information.phone}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          Send us a Text
        </a>
      </div>
    </section>
  );
}