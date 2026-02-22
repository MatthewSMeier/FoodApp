"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useCart } from "@/components/CartContext"
import { useOrder } from "@/app/order/OrderContext"

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart()
  const { orderType, address, setAddress } = useOrder()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const deliveryFee = orderType === "delivery" ? 10 : 0
  const tax = 0.05 * subtotal
  const total = subtotal + deliveryFee

  // ✅ Load profile address automatically
  useEffect(() => {
    async function fetchProfileAddress() {
      if (orderType === "delivery" && !address) {
        const res = await fetch("/api/profile")
        const data = await res.json()
        if (data?.address) {
          setAddress(data.address)
        }
      }
    }

    fetchProfileAddress()
  }, [orderType])

  return (
    <section className="max-w-3xl mx-auto mt-10 space-y-6">
      <h1 className="text-4xl text-red-500 font-bold text-center">
        Your Cart
      </h1>

        <div className="mt-4 mb-4">
          <label className="block font-semibold mb-2">
            Delivery Address
          </label>
          <input
            type="text"
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>
      

      {cartItems.length === 0 && (
        <p className="text-center text-gray-500">
          Your cart is empty.
        </p>
      )}

      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border p-4 rounded-lg"
        >
          <div className="flex items-center gap-4">

            <div className="w-25 h-20 relative">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            </div>

            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="text-red-500 cursor-pointer"
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="space-y-2 text-right text-lg">

          <div>
            Subtotal: ${subtotal.toFixed(2)}
          </div>

          {orderType === "delivery" && (
            <div>
              Delivery Fee: $10.00
            </div>
          )}

          <div>
            Tax: ${tax.toFixed(2)}
          </div>

          <div className="text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

        </div>
      )}
    </section>
  )
}