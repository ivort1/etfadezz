import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FAQs from "@/pages/FAQs";

import type { Faqs } from "../../database/database";
import data from "../../database/database.json";

const { general, pricing, appointments } = data.faqs as Faqs;

export function GeneralFaqs() {
    return(
        <FAQs>
            <Accordion type="single" collapsible>
                {
                    general.map((faq, index) => {
                        return(
                            <AccordionItem value={index.toString()} key={index}>
                                <AccordionTrigger className="font-medium text-base">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-pretty text-gray-500 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </FAQs>
    )
}

export function PricingFaqs() {
    return(
        <FAQs>
            <Accordion type="single" collapsible>
                {
                    pricing.map((faq, index) => {
                        return(
                            <AccordionItem value={index.toString()} key={index}>
                                <AccordionTrigger className="font-medium text-base">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-pretty text-gray-500 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </FAQs>
    )
}

export function AppointmentsFaqs() {
    return(
        <FAQs>
            <Accordion type="single" collapsible>
                {
                    appointments.map((faq, index) => {
                        return(
                            <AccordionItem value={index.toString()} key={index}>
                                <AccordionTrigger className="font-medium text-base">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-pretty text-gray-500 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </FAQs>
    )
}