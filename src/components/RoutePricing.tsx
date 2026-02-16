import RouteCard from "./ui/RouteCard";

const routes = [
  { route: "Delhi → Agra", price: 3500 },
  { route: "Delhi → Jaipur", price: 5500 },
  { route: "Delhi → Chandigarh", price: 4500 },
  { route: "Airport Pickup", price: 900 },
  { route: "Delhi → Rishikesh", price: 5000 },
  { route: "Delhi → Manali", price: 9500 },
];

export default function RoutePricing() {
  return (
    <section id="routes" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Popular Routes Pricing
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {routes.map((r, i) => (
            <RouteCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}