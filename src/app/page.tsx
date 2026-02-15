import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
// import WhyChooseCard from "@/components/ui/WhyChooseCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Pricing/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}
