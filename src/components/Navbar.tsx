"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";


const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Vehicles", href: "#pricing" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
          🚖 CityCab Travels
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-blue-600">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Call Button (Always Visible) */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* Menu Button (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-5 gap-4 font-medium">

            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="tel:+919999999999"
              className="flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              className="text-center bg-green-600 text-white py-3 rounded-lg"
            >
              WhatsApp Booking
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}