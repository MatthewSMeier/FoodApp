import MenuItem from "@/components/MenuItems/MenuItem";

const featuredItems = [
  { name: "Pepperoni", description: "Classic pepperoni pizza", price: 14, image: "/pizza/pepperoni.png" },
  { name: "Supreme", description: "Loaded with meats & veggies", price: 15, image: "/pizza/supreme.png" },
  { name: "BBQ Chicken", description: "Sweet and smoky flavor", price: 15, image: "/pizza/bbqChicken.png" },
];

export default function Hero() {
  return (
    <section>
      <div className="text-center">
        <h3 className="mt-20 leading-4 text-zinc-800 font-semibold text-2xl">
          Check Out
        </h3>

        <h3 className="leading-15 text-red-500 font-semibold text-4xl">
          Our Best Sellers
        </h3>

        <div className="pt-8 grid grid-cols-3 gap-4">
          {featuredItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}