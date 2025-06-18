

import Header from "@/components/ui/Header";
import Hero from "./Hero/page";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import AboutMe from "./About/page";
import PortfolioShowcase from "./Portfolio/page";
import Footer from "@/components/ui/Footer";
import Contact from "./Contact/page";


export default function Home() {
  return (
  <main>
      <Header/>
     
        
      <Hero />
      <AboutMe/>                                                                                                                          
      <PortfolioShowcase/>
      <Contact/>
      <Footer/>
     
                                                  

  </main>
  );
}
