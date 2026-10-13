"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const mimateba = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity < 10) {
      updatedCart[index].quantity += 1;
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
      alert("დეფიციტშია ძმი");
    }
  };

  // რაოდენობის შემცირება
  const gamokleba = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
      removeItem(index);
    }
  };

  const washla = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <main className={styles.page}>
        <h1>შენი კარტები</h1>
        <p>ცარიელია აქ რა გინდა</p>
        <Link href="/" className={styles.backLink}>
          დაბრუნება პროდუქტებში
        </Link>
      </main>
    );
  }
  const jami = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <main className={styles.page}>
      <header className={styles.cartHeader}>
        <h1>შენი კარტები</h1>
        <section className={styles.totalSummary} aria-label="Cart total">
          <p>ამდენის გადახდა გიწევს სულ</p>
          <p className={styles.totalAmount}>${jami.toFixed(2)}</p>
        </section>
      </header>
      <div className={styles.cartGrid}>
        {cartItems.map((product, index) => (
          <article className={styles.cartItem} key={product.id}>
            <img src={product.image} alt={product.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h2>{product.title}</h2>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>

            <div className={styles.quantityControls}>
              <button onClick={() => gamokleba(index)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => mimateba(index)}>+</button>
            </div>

            <button className={styles.removeButton} onClick={() => washla(index)}>
              Remove
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
