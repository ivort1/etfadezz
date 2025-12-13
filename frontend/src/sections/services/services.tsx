import { Fragment } from "react/jsx-runtime";

// src/pages/Services.tsx
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/custom/section"
import Header from "@/components/custom/header"
import ListItem from "@/components/custom/list/ListItem"
import type { Service } from "@/database/database"
import { Separator } from "@/components/ui/separator";

export default function Services() {
  const { isPending, error, data = [] } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: () =>
      fetch("https://square-catalog-list.ivan-development.workers.dev/").then((res) =>
        res.json()
      ),
  })

  if (isPending) return "Loading..."
  if (error) return "An error has occurred: " + (error as Error).message

  return (
    <Section>
      <Header>Services</Header>
      <p className="text-gray-500 text-pretty">
        Every service includes a complimentary drink and your choice of a tonic
        massage or hand massager.
      </p>

      <div className="flex flex-col gap-6">
        {data.map((service) => {
          return (
            <Fragment key={service.id}>
                <ListItem href="booking-select-a-date" imgSrc={service.serviceImage} title={service.serviceName} description={service.serviceDescription}>
                    {service.servicePrice}
                </ListItem>
                <Separator className="last:hidden" />
            </Fragment>
          )
        })}
      </div>
    </Section>
  )
}