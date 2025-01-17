import About from "@/components/UI/About";
import Contact from "@/components/UI/Contact";
import Hero from "@/components/UI/Hero";
import Services from "@/components/UI/Services";
import Technoloy from "@/components/UI/Technoloy";
import Testimonial from "@/components/UI/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Technoloy />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
