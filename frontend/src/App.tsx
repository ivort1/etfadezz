import Layout from "./components/custom/layout/Layout";
import Services from "@/sections/services/services";
import Photos from "@/sections/photos/photos";
import FAQ from "@/sections/faqs/faqs";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Services />
        <Photos />
        <FAQ />
      </Layout>
    </QueryClientProvider>
  )
}

export default App;