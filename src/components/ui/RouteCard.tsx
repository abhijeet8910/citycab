import Link from "next/link";

const RouteCard = ({ route, price }: any) => {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{route}</h3>
        <p className="text-gray-600 text-sm">Starting ₹{price}</p>
      </div>

      <Link
        href="tel:+919999999999"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Book
      </Link>
    </div>
  );
};

export default RouteCard;