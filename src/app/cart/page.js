"use client"

import Image from "next/image"
import { useCart } from "@/components/CartContext"
import { useState, useEffect } from "react"

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const [showCheckout, setShowCheckout] = useState(false)
  const [orderType, setOrderType] = useState(null)
  const [address, setAddress] = useState("")
  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const deliveryFee = orderType === "delivery" ? 10 : 0
  const tax = 0.05 * subtotal
  const noDel = subtotal + tax
  const total = subtotal + deliveryFee + tax

  // Fetch profile address if delivery selected
  useEffect(() => {
    if (orderType === "delivery") {
      fetch("/api/profile")
        .then(res => res.json())
        .then(data => {
          setAddress(data.address || "")
        })
    }
  }, [orderType])

  function handleConfirmPayment() {
    clearCart()
    setShowCheckout(false)
    setOrderType(null)
    setPurchaseComplete(true)
  }

  return (
    <section className="max-w-3xl mx-auto mt-10 space-y-6 relative">
      <h1 className="text-4xl text-red-500 font-bold text-center">
        Your Cart
      </h1>

      {purchaseComplete && (
        <div className="text-center text-green-600 font-bold text-xl">
          ✅ Purchase Successful!
        </div>
      )}

      {cartItems.length === 0 && !purchaseComplete && (
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
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && !purchaseComplete && (
        <div className="text-right space-y-2">
          <div className="font-semibold">
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <div className="font-semibold">
            Tax: ${tax.toFixed(2)}
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full"
          >
            Pay: ${noDel.toFixed(2)}
          </button>
        </div>
      )}

      {/* ================= CHECKOUT MODAL ================= */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 space-y-4 shadow-xl">

            <h2 className="text-xl font-bold text-center">
              Choose Order Type
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOrderType("carryout")}
                className={`px-4 py-2 rounded ${
                  orderType === "carryout"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200"
                }`}
              >
                Carryout
              </button>

              <button
                onClick={() => setOrderType("delivery")}
                className={`px-4 py-2 rounded ${
                  orderType === "delivery"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Delivery
              </button>
            </div>

            {orderType === "delivery" && (
              <div className="text-sm">
                <p className="font-semibold">Delivery Address:</p>
                <p className="text-gray-600">
                  {address || "No address on file"}
                </p>
              </div>
            )}

            {orderType && (
              <div className="border-t pt-4 text-sm space-y-1">
                <div>Subtotal: ${subtotal.toFixed(2)}</div>
                <div>Tax: ${tax.toFixed(2)}</div>

                {orderType === "delivery" && (
                  <div>Delivery Fee: $10.00</div>
                )}

                <div className="font-bold text-lg">
                  Total: ${total.toFixed(2)}
                </div>

                <button
                  onClick={handleConfirmPayment}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded"
                >
                  Confirm Pay
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setShowCheckout(false)
                setOrderType(null)
              }}
              className="text-center text-gray-500 text-sm w-full"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </section>
  )
}