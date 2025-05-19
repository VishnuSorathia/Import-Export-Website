
// page.tsx 

import Hero from "@/sections/Hero";
import AboutUs from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import ContactForm from "@/sections/ContactForm";


export default function Home() {
  return (
    <>
      <Hero />
      
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactForm />
    </>
  );
}
