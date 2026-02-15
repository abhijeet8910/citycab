"use client";
import { useEffect, useRef } from "react";
import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    title: "Local City Taxi",
    description:
      "Affordable taxi service for daily city travel and office rides.",
    image:
      "https://images.unsplash.com/photo-1517949908114-71669a64e1c3?q=80&w=2070",
  },
  {
    title: "Airport Transfer",
    description:
      "On-time airport pickup and drop with professional drivers.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2070",
  },
  {
    title: "Outstation Trips",
    description:
      "Comfortable taxis for family vacations and long-distance trips.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
  },
  {
    title: "Tempo Traveller",
    description:
      "Perfect for group travel, tours and wedding transportation.",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070",
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable cab service for office employees and business trips.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070",
  },
  {
    title: "Wedding Transport",
    description:
      "Luxury cars & group transport for wedding events.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  // Auto scroll on mobile
  useEffect(() => {
    const container = scrollRef.current as HTMLDivElement | HTMLElement | null;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return; // desktop skip

      scrollAmount += 320;

      if (scrollAmount >= container.scrollWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Taxi Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable taxi services for local, airport and outstation travel.
          </p>
        </div>

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scroll-smooth no-scrollbar"
        >
          {services.map((service, index) => (
            <div key={index} className="min-w-75 md:min-w-0">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}