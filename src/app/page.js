"use client";
import styles from "./page.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";
export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (shecdoma) {
        console.error("Error fetching products:", shecdoma);
      }
    };

    fetchProducts();
  }, []);
  if (!products) {
    return (
      <main className={styles.page}>
        <p className={styles.loading}>Loading products...</p>
      </main>
    );
  }

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Discover something new</p>
        <h1>Our products</h1>
        <p className={styles.subtitle}>Thoughtfully selected essentials for everyday life.</p>
      </header>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <Link href={`/products/details/${product.id}`} className={styles.productLink}>
              <div className={styles.imageContainer}>
                <img className={styles.productImage} src={product.image} alt={product.title} />
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <button className={styles.addToCartButton} type="button" aria-label={`Add ${product.title} to cart`}>
              <span>Add to cart</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
