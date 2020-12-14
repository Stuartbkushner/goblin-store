import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../CartContext"

export const CartWidget = () => {
  const { products } = useCart()

  return (
    <Link to="/cart">
      <span className="is-error">{products?.length || 0}</span>
    </Link>
  )
}
