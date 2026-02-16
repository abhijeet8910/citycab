import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            🚖 CityCab Travels
          </h3>
          <p className="text-sm leading-relaxed">
            Reliable taxi, cab and tempo traveller services for city,
            airport and outstation trips. Safe, comfortable and affordable
            travel for families and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#vehicles">Vehicles</Link></li>
            <li><Link href="#fare">Fare Calculator</Link></li>
            <li><Link href="#routes">Routes Pricing</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Our Services
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Local Taxi Service</li>
            <li>Airport Pickup & Drop</li>
            <li>Outstation Trips</li>
            <li>Tempo Traveller Booking</li>
            <li>Corporate Cab Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-center">
              <Phone size={16} />
              <a href="tel:+919999999999">+91 99999 99999</a>
            </li>

            <li className="flex gap-2 items-center">
              <Mail size={16} />
              info@citycabtravels.com
            </li>

            <li className="flex gap-2 items-start">
              <MapPin size={16} />
              New Delhi, India
            </li>
          </ul>

          <Link
            href="https://wa.me/919999999999"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            WhatsApp Booking
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-sm py-5">
        © {new Date().getFullYear()} CityCab Travels. All rights reserved.
      </div>
    </footer>
  );
}