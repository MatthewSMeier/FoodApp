"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Add item
  function addToCart(item) {
    setCartItems(prev => [...prev, item])
  }

  // Remove single item by index
  function removeFromCart(index) {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  // Clear entire cart
  function clearCart() {
    setCartItems([])
  }

  // Total number of items (for cart badge)
  const itemCount = cartItems.length

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}