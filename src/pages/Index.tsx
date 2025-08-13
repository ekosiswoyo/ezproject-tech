
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
