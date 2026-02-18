import Image from "next/image";
import Pizza from "@/assets/pizza.png";

export default function MenuItem() {
    return (
        <div className = "bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
            <Image src={Pizza} alt = "Pepperoni Pizza" className = "mx-auto w-24 sm:w-36 md:w-48"></Image>
            </div>
            <h4 className ="font-semibold text-xl my-2">
              Pepperoni Pizza
            </h4>
            <p className = "text-gray-500 text-sm py-2 pb-3">
              In this tutorial, You will learn how to.
            </p>
            <button className = "bg-red-500 text-white rounded-full px-6 py-2 cursor-pointer">
              Add to Cart $14
            </button>
          </div>
    );
}