import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, text }: any) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="text-gray-600 mb-4 text-sm">"{text}"</p>

      <h4 className="font-semibold">{name}</h4>
    </div>
  );
};

export default TestimonialCard;