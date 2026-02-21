import { connectDB } from "@/lib/db";
import SingleMenuItem from "@/models/SingleMenuItem";
import MenuItem from "@/components/MenuItems/MenuItem";

async function getMenuItems() {
  await connectDB();
  return await SingleMenuItem.find();
}

export default async function MenuPage() {
  const items = await getMenuItems();

  const categories = {};
  items.forEach((item) => {
    if (!categories[item.category]) categories[item.category] = [];
    categories[item.category].push(item);
  });

  // ✅ Define display order
  const categoryOrder = ["pizza", "wings", "dessert"];

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-5xl font-bold my-10 text-center text-red-500">
        Menu
      </h1>

      {categoryOrder.map((category) => {
        if (!categories[category]) return null;

        return (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 capitalize">
              {category}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {categories[category].map((item) => (
                <MenuItem
                  key={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}