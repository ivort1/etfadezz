import "/src/styles/globals.css";

import Hero from "./sections/1_Hero";
import Services from "./sections/2_Services";
import Gallery from "./sections/3_Gallery";
import FAQs from "./sections/4_FAQs";
import Footer from "./components/layout/Footer";

export default function App() {

  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <FAQs />
      <Footer />
    </>
  )
}