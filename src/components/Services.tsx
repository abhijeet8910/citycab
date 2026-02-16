"use client";
import { useEffect, useRef } from "react";
import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    title: "Local City Taxi",
    description:
      "Affordable taxi service for daily city travel and office rides.",
    image:
      "https://images.unsplash.com/photo-1696233068092-5eee98f7fba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGxvY2FsJTIwY2l0eSUyMHRheGl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Airport Transfer",
    description:
      "On-time airport pickup and drop with professional drivers.",
    image:
      "https://media.istockphoto.com/id/1096776608/photo/airport-taxi-board-with-illuminated-traffic-lights.webp?a=1&b=1&s=612x612&w=0&k=20&c=-cVPdtRVGH-b2EqWxvC0hnQ6bZsbX6Jya5Zl7FLrVYw=",
  },
  {
    title: "Outstation Trips",
    description:
      "Comfortable taxis for family vacations and long-distance trips.",
    image:
      "https://media.istockphoto.com/id/158945815/photo/cabs-at-the-taxi-stand-in-india.jpg?s=612x612&w=0&k=20&c=jn84Ilj5hMD0AmjHY9cK1gLZ0Zy07ylgVcuoUPyVA6Y=",
  },
  {
    title: "Tempo Traveller",
    description:
      "Perfect for group travel, tours and wedding transportation.",
    image:
      "https://media.istockphoto.com/id/1428046828/photo/indian-man-drives-auto-rickshaw-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=8qdiUAxN7wxWs9xRqdd7t5_OBsJSgaduwJGRmxDYD7E=",
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable cab service for office employees and business trips.",
    image:
      "https://media.istockphoto.com/id/1224814265/photo/indian-couple-in-the-car-with-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=zBDTueBw2-tESim4NTyIqV4KLX_99Wkqrb7YLclltcY=",
  },
  {
    title: "Wedding Transport",
    description:
      "Luxury cars & group transport for wedding events.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
  },
  {
    title: "Family Travels",
    description:
      "Luxury cars & group transport for Family Trips and Travels.",
    image:
      "https://media.istockphoto.com/id/1178766965/photo/happy-family-inside-car-stock-photo.jpg?s=612x612&w=0&k=20&c=yoKMRPw0-PJkLCbeZFDdqQQuq0CpogMBNEeTVALZ7Y8=",
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