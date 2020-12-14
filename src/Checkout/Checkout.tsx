import React from "react"
import { useCart } from "../CartContext"
import { CheckoutList } from "./CheckoutList"
import { CheckoutForm } from "./CheckoutForm"

export const Checkout = () => {
  const { products, totalPrice } = useCart()

  return (
    <section className="with-title">
      <h1 className="title">Checkout</h1>
      <div className="is-rounded checkout-list-wrapper">
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()}</p>
      </div>
      <p>Enter your payment credentials:</p>
      <CheckoutForm />
    </section>
  )
}
