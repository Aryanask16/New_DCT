import Navbar from "./Navbar";
import Hero from "./Hero_DCT";
import About from "./About_DCT";
import Services from "./Services";
import Lorems from "./Lorem";
import Footer from "./Footer_DCT";
import Globe2 from "./Globe2"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="hero-section mt-20">
      <Hero />
      </div>
      <div className="about-section mt-20">
      <About />
      </div>
      <Services />
      <Globe2 />
      <Lorems />  

      <Footer />
      
    </div>
  );
}
