"use client"

import { useRouter } from "next/navigation";
import { useOrder } from "@/app/order/OrderContext";
import { useState } from "react";
import Image from "next/image";
import Pizza from "@/assets/pizza.png";

export default function Hero() {
  const router = useRouter()
  const { setOrderType, setAddress } = useOrder()

  // ✅ Local address state (THIS was missing)
  const [localAddress, setLocalAddress] = useState("")

  function handleDelivery() {
    setOrderType("delivery")
    setAddress(localAddress)
    router.push("/cart")
  }

  function handleCarryout() {
    setOrderType("carryout")
    setAddress("") // clear address
    router.push("/cart")
  }

  return (
    <section className="hero md:mt-4 flex items-center justify-between">
      
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-red-500">
            Pizza
          </span>
        </h1>

        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete,
          <br /> a simple yet delicious joy in life.
        </p>

        <div className="items-center flex gap-4 text-xl text-zinc-800">
          Start Your Order:

          <button
            onClick={handleDelivery}
            className="cursor-pointer ml-8 mr-2 flex justify-center bg-red-500 items-center gap-2 text-white px-4 py-2 rounded-full"
          >
            Delivery
          </button>

          or

          <button
            onClick={handleCarryout}
            className="cursor-pointer ml-2 flex justify-center bg-gray-300 items-center gap-2 px-4 py-2 rounded-full"
          >
            Carryout
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <Image
          src={Pizza}
          alt="Pizza"
          className="w-40 sm:w-72 md:w-88 lg:w-102"
        />
      </div>

    </section>
  )
}