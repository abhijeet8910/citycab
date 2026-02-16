import FareCalculator from "@/components/FareCalculator";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import RoutePricing from "@/components/RoutePricing";
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
      <FareCalculator/>
      <RoutePricing/>
      <WhyChooseUs/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
