"use client"

import { createContext, useContext, useState } from "react"

const OrderContext = createContext()

export function OrderProvider({ children }) {
  const [orderType, setOrderType] = useState("carryout")
  const [address, setAddress] = useState("")

  const deliveryFee = orderType === "delivery" ? 7 : 0

  return (
    <OrderContext.Provider
      value={{
        orderType,
        setOrderType,
        address,
        setAddress,
        deliveryFee,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}