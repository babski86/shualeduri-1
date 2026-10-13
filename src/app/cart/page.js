import { useState, useEffect } from "react";
export default function CartPage() {
  const [cartItems, setCartItems] = useState(1);
  const increaseCartItems = () => {
    if (cartItems < 10) {
      setCartItems(cartItems + 1);
    }
  };
  const decreaseCartItems = () => {
    if (cartItems > 1) {
      setCartItems(cartItems - 1);
    }
  };
  return (
    <div>
      <button onClick={decreaseCartItems}>-</button>
      <span>{cartItems}</span>
      <button onClick={increaseCartItems}>+</button>
    </div>
  );
}
