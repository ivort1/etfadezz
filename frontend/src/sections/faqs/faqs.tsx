import Header from "@/components/custom/header";
import Section from "@/components/custom/section";

import type { Faqs } from "@/database/database"; 
import data from "../../database/database.json";
import ListItem from "@/components/custom/list/ListItem";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/components/ui/separator";

export default function FAQ() {
    const { categories } = data.faqs as Faqs;
    return (
        <Section>
            <Header>Have a Question?</Header>
        
              <div className="flex flex-col gap-6">
                {categories.map((category: Faqs["categories"][number]) => {
                  return (
                    <Fragment key={category.href}>
                        <ListItem href={category.href} imgSrc={category.imgSrc} title={category.title} description={category.description} />
                        <Separator className="last:hidden" />
                    </Fragment>
                  )
                })}
              </div>
        </Section>
    )
}