import Image from "next/image";

export default function MenuItem({ name, description, price, image }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      
      {/* Image */}
      <div className="text-center">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="mx-auto w-30 sm:w-38 md:w-48 h-20 sm:h-20 md:h-32 object-cover"
        />
      </div>

      {/* Name */}
      <h4 className="font-semibold text-xl my-2">
        {name}
      </h4>

      {/* Description */}
      <p className="text-gray-500 text-sm py-2 pb-3">
        {description}
      </p>

      {/* Price */}
      <button className="bg-red-500 text-white rounded-full px-6 py-2 cursor-pointer">
        Add to Cart ${price}
      </button>

    </div>
  );
}