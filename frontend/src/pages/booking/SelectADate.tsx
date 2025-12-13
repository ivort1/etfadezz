// import { Fragment } from "react/jsx-runtime";

// import { useQuery } from "@tanstack/react-query"

// // src/pages/Services.tsx
// import Section from "@/components/custom/section"
// import Header from "@/components/custom/header"
// import ListItem from "@/components/custom/list/ListItem"

// import { Separator } from "@/components/ui/separator";

// export default function SelectADate() {
//   const { isPending, error, data = [] } = useQuery<Type goes here?[]>({
//     queryKey: ["services"],
//     queryFn: () =>
//       fetch("cloudlfare url...").then((res) =>
//         res.json()
//       ),
//   })

//   if (isPending) return "Loading..."
//   if (error) return "An error has occurred: " + (error as Error).message

//   return (
//     <Section>
//       <Header>Select a Date</Header>
      
//     </Section>
//   )
// }