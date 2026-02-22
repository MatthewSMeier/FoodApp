"use client"

import { SessionProvider } from "next-auth/react"
import { CartProvider } from "@/components/CartContext"
import { OrderProvider } from "@/app/order/OrderContext"

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <OrderProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </OrderProvider>
    </SessionProvider>
  )
}