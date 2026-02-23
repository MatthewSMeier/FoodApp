"use client"

import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useCart } from "@/components/CartContext"
import Cart from "@/assets/shoppingCart.png"

export default function Header() {
  const { data: session } = useSession()
  const { cartItems } = useCart()

  const itemCount = cartItems.length

  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="text-red-500 items-center font-semibold text-3xl"
      >
        Matt's Pizzeria
      </Link>

      <nav className="flex items-center gap-8 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>

        {/* If NOT logged in */}
        {!session && (
          <Link
            href="/login"
            className="bg-red-500 rounded-full text-white px-8 py-2"
          >
            Login
          </Link>
        )}

        {/* If logged in */}
        {session && (
          <Link href="/profile">Profile</Link>
        )}

        {/* Cart Icon + Badge */}
        <Link href="/cart" className="relative" id="cart-icon">
          <Image
            src={Cart}
            alt="Cart"
            width={40}
            height={40}
          />

          {itemCount > 0 && (
            <span
              className="absolute -top-2 -right-2
                         bg-red-500 text-white
                         text-xs font-bold
                         rounded-full
                         w-5 h-5
                         flex items-center justify-center
                         "
            >
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}