import React from "react";
import WhyChooseCard from "./ui/WhyChooseCard";

import {
  ShieldCheck,
  Clock,
  IndianRupee,
  Car,
  MapPin,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    desc: "Professional and trained drivers ensuring safe travel.",
  },
  {
    icon: Clock,
    title: "24×7 Availability",
    desc: "Book rides anytime for city, airport or outstation.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges.",
  },
  {
    icon: Car,
    title: "Clean Vehicles",
    desc: "Well-maintained and sanitized vehicles.",
  },
  {
    icon: MapPin,
    title: "Doorstep Pickup",
    desc: "Pickup & drop exactly at your location.",
  },
  {
    icon: PhoneCall,
    title: "Instant Booking",
    desc: "Quick booking confirmation via call or WhatsApp.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Our Taxi Service?
          </h2>
          <p className="text-gray-600 mt-3">
            Safe, affordable and comfortable rides for every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <WhyChooseCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}