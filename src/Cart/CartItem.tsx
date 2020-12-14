import React from 'react'
import { Product } from '../shared/types'

interface CartItemProps {
  product: Product
  removeFromCart: (product: Product) => void
}

export const CartItem = ({ product, removeFromCart }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img
        style={{ imageRendering: "pixelated" }}
        src={product.image}
        width="64px"
        height="64px"
        alt="goblin"
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button
        onClick={() => {
          removeFromCart(product)
        }}
        className="is-error"
      >
        Remove
      </button>
    </div>
  )
}
