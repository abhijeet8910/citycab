import React from "react";

const WhyChooseCard = ({ icon: Icon, title, desc }: any) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
      <div className="flex justify-center mb-4 text-blue-600">
        <Icon size={36} />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default WhyChooseCard;