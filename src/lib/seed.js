//Just used for seeding

/*
import { connectDB } from "./db";
import MenuItem from "@/models/SingleMenuItem";

export async function seedMenu() {
  await connectDB();

  await MenuItem.insertMany([
    // 🍕 Pizzas
    { name: "Pepperoni", description: "Classic pepperoni pizza", price: 14, image: "/pizza/pepperoni.png", category: "pizza" },
    { name: "Meat Lovers", description: "Loaded with all meats", price: 16, image: "/pizza/meatLovers.png", category: "pizza" },
    { name: "Supreme", description: "Pepperoni, veggies, and more", price: 15, image: "/pizza/supreme.png", category: "pizza" },
    { name: "Veggie", description: "Fresh vegetables only", price: 13, image: "/pizza/veggie.png", category: "pizza" },
    { name: "BBQ Chicken", description: "Sweet and smoky", price: 15, image: "/pizza/bbqChicken.png", category: "pizza" },
    { name: "Hawaiian", description: "Ham and pineapple", price: 14, image: "/pizza/hawaiian.png", category: "pizza" },

    // 🍰 Desserts
    { name: "Cinnamon Rolls", description: "Warm and sweet", price: 6, image: "/dessert/cinnamonRolls.png", category: "dessert" },
    { name: "Brownies", description: "Rich chocolate", price: 5, image: "/dessert/brownies.png", category: "dessert" },
    { name: "Apple Dessert Pizza", description: "Apple and cinnamon on pizza crust", price: 6.5, image: "/dessert/appleDessertPizza.png", category: "dessert" },

    // 🍗 Wings
    { name: "Hot Buffalo", description: "Classic spicy wings", price: 12, image: "/wings/hotBuffalo.png", category: "wings" },
    { name: "Lemon Pepper", description: "Tangy and zesty", price: 12, image: "/wings/lemonPepper.png", category: "wings" },
    { name: "Garlic Parmesan", description: "Savory and cheesy", price: 12, image: "/wings/garlicParmesan.png", category: "wings" },
  ]);

  console.log("Menu seeded!");
}
*/