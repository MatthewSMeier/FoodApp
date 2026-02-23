"use client"

import Image from "next/image";
import { useCart } from "@/components/CartContext"

export default function MenuItem({ name, description, price, image }) {
  const { addToCart } = useCart()

  function handleAddToCart(e) {
    // Add item to cart state
    addToCart({
      name,
      price,
      image,
    })

    // 🔥 FLY TO CART ANIMATION
    const card = e.currentTarget.closest(".menu-card")
    const img = card?.querySelector("img")
    const cartIcon = document.getElementById("cart-icon")

    if (!img || !cartIcon) return

    const imgRect = img.getBoundingClientRect()
    const cartRect = cartIcon.getBoundingClientRect()

    const clone = img.cloneNode(true)

    clone.style.position = "fixed"
    clone.style.left = imgRect.left + "px"
    clone.style.top = imgRect.top + "px"
    clone.style.width = imgRect.width + "px"
    clone.style.height = imgRect.height + "px"
    clone.style.transition = "all 0.7s cubic-bezier(.4,-0.3,.6,1.3)"
    clone.style.zIndex = 9999
    clone.style.pointerEvents = "none"

    document.body.appendChild(clone)

    requestAnimationFrame(() => {
      clone.style.left = cartRect.left + "px"
      clone.style.top = cartRect.top + "px"
      clone.style.width = "40px"
      clone.style.height = "40px"
      clone.style.opacity = "0.6"
      clone.style.transform = "scale(0.5)"
    })

    setTimeout(() => {
      clone.remove()
    }, 800)
  }

  return (
    <div className="menu-card bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      
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
      <button
        onClick={handleAddToCart}
        className="bg-red-500 text-white rounded-full px-6 py-2 cursor-pointer"
      >
        Add to Cart ${price}
      </button>

    </div>
  );
}